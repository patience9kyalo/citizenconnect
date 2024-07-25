CREATE OR ALTER PROCEDURE updatePollQuestions(

    @QuestionId VARCHAR(255),
    @QuestionText VARCHAR(255)

)

AS 
BEGIN 
UPDATE pollQuestion SET QuestionText = @QuestionText WHERE QuestionId = @QuestionId AND IsDeleted = 0
END