use citizenconnect360

CREATE TABLE pollChoice(

    ChoicesId Varchar(255)PRIMARY KEY,
    QuestionId Varchar(255)NOT NULL,
    ChoicesText Varchar (255) NOT NULL,
    IsDeleted INT DEFAULT 0,
    FOREIGN KEY (QuestionId) REFERENCES pollQuestion(QuestionId),

) 


SELECT * FROM pollChoice




