CREATE OR ALTER PROCEDURE rejectUsers(@Id Varchar(255))
AS 
BEGIN 
UPDATE users SET IsApproved = 0   WHERE Id = @Id AND IsApproved = 1 AND IsDeleted = 0;
END