from flask import Flask, jsonify,render_template, request,flash
from dotenv import load_dotenv
from viewsummary import agent_executor
import pyodbc
import os
import uuid

load_dotenv('.env')
app = Flask(__name__)

# print(os.getenv('USERNAME'), USERNAME)
# being implicitly converted to admin. work on later

DB_USER = 'sa'
app.config['SECRET'] = os.getenv('SECRET')

# use string interpolation to create a connection string variable
connectionString = f"""
    DRIVER={{ODBC Driver 17 for SQL Server}};
    SERVER={os.getenv('SERVER')};
    DATABASE={os.getenv('DB_NAME')};
    UID={DB_USER};
    PWD={os.getenv('DB_PWD')};
"""

# function to remove repetitive writing of queries
def query_db(query, params=()):

    # connect to mssql database
    conn = pyodbc.connect(connectionString)     
    cursor = conn.cursor()      #cursor object to interat with db

    # execute the query given
    cursor.execute(query, params)

    # Get the column names from the cursor description
    columns = [column[0] for column in cursor.description]

    # declare empty list to store query results
    results = []
    for row in cursor.fetchall():
        # zip(columns, row) pairs each column name with the corresponding value in the row
        # dict(zip(columns, row)) creates a dictionary for each row with column names as keys
        results.append(dict(zip(columns, row)))

    # close the db connection
    conn.close()
    return results


# create a route to get all users from the db
@app.route('/users', methods=['GET'])
def get_users():

    # create the query to be used
    getUsers = f"SELECT * FROM users"

    try:
        data = query_db(getUsers)    
        return jsonify(data),200
    
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500




@app.route('/educate-chat', methods=['GET','POST'])
def educate_chat():
    # Check if the request contains JSON data
    if not request.is_json:
        return jsonify({"error": "Invalid input, JSON required"}), 400
    
    # Extract data from JSON payload
    data = request.get_json()
    chatId = str(uuid.uuid4())
    Id = data.get('Id')
    question = data.get('question')
    print(chatId)
    print(Id)
    # print()

    # Validate input data
    if not all ([Id, question]):
        return jsonify({"error": "Missing query parameter"}), 400

    try:
        # Use the agent_executor to process the query
        answer = agent_executor(question)
        questionAsked = answer.get('input')
        answerGiven = answer.get('output')
        print(f"THIS IS THE RESPONSE {answerGiven}")

        # add values to the ai table
        addChat = """
        INSERT INTO Chat (chatId, Id, question, response) 
        VALUES (?, ?, ?, ?)
        """

        conn = pyodbc.connect(connectionString)
        cursor = conn.cursor()
        cursor.execute(addChat, (chatId, Id, question, answerGiven))
        conn.commit()
        conn.close()

        return jsonify({"response": answerGiven}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)