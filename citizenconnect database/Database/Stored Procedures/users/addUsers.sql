CREATE OR ALTER PROCEDURE addUsers(

    @Id VARCHAR (255),
    @Name VARCHAR(255),
    @Email VARCHAR(255),
    @Role VARCHAR(255),
    @Password VARCHAR(255),
    @IsApproved INT OUTPUT
)
AS
BEGIN
    IF @Role ='gvn'
    SET @IsApproved = 0
    ELSE IF @Role = 'citizen' OR @Role = 'admin'
    SET @IsApproved = 1

    INSERT INTO users (Id, Name, Email, Password, Role, IsApproved) VALUES(@Id, @Name, @Email, @Password, @Role, @IsApproved)
END