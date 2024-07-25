CREATE OR ALTER PROCEDURE updatePollChoices(

    @ChoicesId VARCHAR(255),
    @ChoicesText VARCHAR(255),
    @QuestionId VARCHAR(255)

)

AS 
BEGIN 
UPDATE pollChoice SET ChoicesText = @ChoicesText, QuestionId = @QuestionId WHERE ChoicesId = @ChoicesId AND IsDeleted = 0
END