CREATE OR ALTER PROCEDURE addPollChoices (

    @ChoicesId VARCHAR(255),
    @QuestionId VARCHAR(255),
    @ChoicesText VARCHAR(255)
)
AS
BEGIN
    INSERT INTO pollChoice (ChoicesId, ChoicesText, QuestionId)
    VALUES (@ChoicesId, @ChoicesText, @QuestionId);
END

