CREATE OR ALTER PROCEDURE getVoteByUserId
(
    @Id VARCHAR(255)
)
AS
BEGIN
    SELECT VotesId, ChoicesId, QuestionId, Id, VoteCount
    FROM pollVote
    WHERE Id = @Id
    AND IsDeleted = 0;
END
