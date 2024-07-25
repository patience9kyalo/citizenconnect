CREATE OR ALTER PROCEDURE getUser(
    @Id Varchar(255)
)
AS
BEGIN
SELECT * FROM users WHERE Id=@Id AND IsDeleted = 0
END;


