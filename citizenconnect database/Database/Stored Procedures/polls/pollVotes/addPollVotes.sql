CREATE OR ALTER PROCEDURE addPollVotes (

    @VotesId VARCHAR(255),
    @ChoicesId VARCHAR(255),
    @QuestionId VARCHAR(255),
    @VoteCount VARCHAR(255),
    @Id VARCHAR(255)
)
AS
BEGIN
    INSERT INTO pollVote (VotesId, ChoicesId, QuestionId,VoteCount, Id)
    VALUES (@VotesId, @ChoicesId, @QuestionId,@VoteCount, @Id);
END

