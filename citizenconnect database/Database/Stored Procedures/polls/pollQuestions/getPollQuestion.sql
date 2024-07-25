CREATE OR ALTER PROCEDURE getPollQuestion (
    @QuestionId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM pollQuestion WHERE QuestionId = @QuestionId AND IsDeleted = 0
END