CREATE OR ALTER PROCEDURE getusersNotApproved
AS 
BEGIN 
SELECT * FROM users WHERE IsApproved = 0 AND IsDeleted = 0

END