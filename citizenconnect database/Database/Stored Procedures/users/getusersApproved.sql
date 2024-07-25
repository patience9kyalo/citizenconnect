CREATE OR ALTER PROCEDURE getusersApproved
AS 
BEGIN 
SELECT * FROM users WHERE IsApproved = 1 AND IsDeleted = 0
END