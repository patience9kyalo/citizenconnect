CREATE OR ALTER PROCEDURE addPollQuestions (
    @QuestionId VARCHAR(255),
    @QuestionText VARCHAR(255)
)
AS
BEGIN
    INSERT INTO pollQuestion (QuestionId, QuestionText)
    VALUES (@QuestionId, @QuestionText);
END

