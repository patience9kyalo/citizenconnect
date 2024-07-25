CREATE OR ALTER PROCEDURE deletePollQuestions(@QuestionId Varchar(255))
AS 
BEGIN 
UPDATE pollQuestion SET IsDeleted = 1   WHERE QuestionId = @QuestionId;
END