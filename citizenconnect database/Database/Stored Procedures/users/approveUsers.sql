CREATE OR ALTER PROCEDURE approveUsers(@Id Varchar(255))
AS 
BEGIN 
UPDATE users SET IsApproved = 1   WHERE Id = @Id AND IsApproved = 0 AND IsDeleted = 0;
END