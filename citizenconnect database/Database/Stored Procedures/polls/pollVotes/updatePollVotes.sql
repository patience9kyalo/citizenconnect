CREATE OR ALTER PROCEDURE updatePollVotes(

    @VotesId VARCHAR(255),
    @ChoicesId VARCHAR(255),
    @QuestionId VARCHAR(255),
    @VoteCount VARCHAR(255),
    @Id VARCHAR(255)

)

AS 
BEGIN 
UPDATE pollVote SET ChoicesId = @ChoicesId, QuestionId = @QuestionId, VoteCount = @VoteCount, Id = @Id WHERE VotesId = @VotesId AND IsDeleted = 0
END