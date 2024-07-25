from langchain.agents import create_sql_agent
from langchain.agents.agent_toolkits import SQLDatabaseToolkit 
from langchain.sql_database import SQLDatabase
from langchain.chat_models import ChatOpenAI
from langchain.agents.agent_types import AgentType

KEY = "sk-proj-3mUDup50CdPbxEphW0mbT3BlbkFJ1JlKmWO4ntqSzuSQ0qaM"
uri = 'mssql+pyodbc://sa:31Jan2002@localhost:1433/citizenconnect360?driver=ODBC+Driver+17+for+SQL+Server'

database = SQLDatabase.from_uri(uri)

llm = ChatOpenAI(model = "gpt-3.5-turbo",openai_api_key=KEY)

toolkit = SQLDatabaseToolkit(db = database, llm = llm)

agent_executor = create_sql_agent(

    llm = llm,
    toolkit = toolkit,
    agent_type = AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose= True,
    prefix = "An AI that interacts with mssql database"

)

# result = agent_executor("What are some of the kenyan views")

# print(result)
