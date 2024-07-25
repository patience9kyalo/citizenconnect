CREATE OR ALTER PROCEDURE getPollChoice (
    @ChoicesId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM pollChoice WHERE ChoicesId = @ChoicesId AND IsDeleted = 0
END