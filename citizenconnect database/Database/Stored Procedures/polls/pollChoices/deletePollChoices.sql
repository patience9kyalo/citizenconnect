CREATE OR ALTER PROCEDURE deletePollChoices(@ChoicesId Varchar(255))
AS 
BEGIN 
UPDATE pollChoice SET IsDeleted = 1   WHERE ChoicesId = @ChoicesId;
END