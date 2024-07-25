CREATE OR ALTER PROCEDURE updateViews(

    @viewId Varchar(255),
    @viewDescription Varchar (255)
)

AS 
BEGIN 
UPDATE views SET viewId = @viewId, viewDescription = @viewDescription WHERE viewId = @viewId AND IsDeleted = 0
END