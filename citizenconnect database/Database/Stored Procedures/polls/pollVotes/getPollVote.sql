CREATE OR ALTER PROCEDURE getPollVotes (
    @VotesId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM pollVote WHERE VotesId = @VotesId AND IsDeleted = 0
END