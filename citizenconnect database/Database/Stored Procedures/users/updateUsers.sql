CREATE OR ALTER PROCEDURE updateUser(
    @Id Varchar(255),
    @Name Varchar(255),
    @Email Varchar(255),
    @Role Varchar(255), 
    @Password VARCHAR(255)
)
AS 
BEGIN 
UPDATE users SET Name = @Name, Email = @Email, Role = @Role, Password = @Password WHERE Id = @Id AND IsDeleted = 0
END