CREATE OR ALTER PROCEDURE getPollQuestionById (
    @QuestionId VARCHAR(255)
)
AS
BEGIN
    SELECT * 
    FROM PollChoice
    WHERE QuestionId = @QuestionId AND IsDeleted = 0
END