CREATE OR ALTER PROCEDURE getViews
AS 
BEGIN 
SELECT * FROM views WHERE IsDeleted = 0;
END