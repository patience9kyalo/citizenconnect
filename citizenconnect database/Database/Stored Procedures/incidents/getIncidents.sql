CREATE OR ALTER PROCEDURE getIncidents
AS 
BEGIN 
SELECT * FROM incidents WHERE IsDeleted = 0
END