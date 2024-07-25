use citizenconnect360

CREATE TABLE pollVote(

    VotesId Varchar(255)PRIMARY KEY,
    ChoicesId Varchar(255)NOT NULL,
    QuestionId Varchar(255) NOT NULL,
    Id VARCHAR(255) NOT NULL,
    VoteCount VARCHAR(255) NOT NULL,
    IsDeleted INT DEFAULT 0,
    FOREIGN KEY (ChoicesId) REFERENCES pollChoice(ChoicesId),
    FOREIGN KEY (QuestionId) REFERENCES pollQuestion(QuestionId),
    FOREIGN KEY (Id) REFERENCES users(Id)

) 









