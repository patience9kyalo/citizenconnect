CREATE OR ALTER PROCEDURE getUserEmail(
    @Email Varchar(255)
)
AS
BEGIN
SELECT * FROM users WHERE Email= @Email AND IsDeleted = 0
END;