CREATE OR ALTER PROCEDURE deletePollVotes(@VotesId Varchar(255))
AS 
BEGIN 
UPDATE pollVote SET IsDeleted = 1   WHERE VotesId = @VotesId;
END