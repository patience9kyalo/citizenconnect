CREATE OR ALTER PROCEDURE deleteUser(@Id Varchar(255))
AS 
BEGIN 
UPDATE users SET IsDeleted = 1   WHERE Id = @Id;
END