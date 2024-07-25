CREATE OR ALTER PROCEDURE getVoteCounts

    @ChoicesId VARCHAR(255)

AS
BEGIN
    SELECT 
        ChoicesId,
        COUNT(*) AS TotalVotes
    FROM 
        pollVote
    WHERE 
        ChoicesId = @ChoicesId
        AND IsDeleted = 0
    GROUP BY 
        ChoicesId;
END
