CREATE OR ALTER PROCEDURE getPollVotes
AS 
BEGIN 
SELECT * FROM pollVote WHERE IsDeleted = 0;
END