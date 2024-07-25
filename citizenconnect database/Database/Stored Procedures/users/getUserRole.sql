CREATE OR ALTER PROCEDURE getUserRole(
    @Id Varchar(255)
)
AS
BEGIN
    SELECT Role 
    FROM users 
    WHERE Id = @Id AND IsDeleted = 0;
END;
