CREATE OR ALTER PROCEDURE deleteViews(@viewId Varchar(255))
AS 
BEGIN 
UPDATE views SET IsDeleted = 1   WHERE viewId = @viewId;
END