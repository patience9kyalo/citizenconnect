CREATE OR ALTER PROCEDURE addViews (
    @viewId Varchar(255),
    @viewDescription Varchar (255)

)
AS
BEGIN
    INSERT INTO views (viewId, viewDescription)
    VALUES (@viewId, @viewDescription);
END

