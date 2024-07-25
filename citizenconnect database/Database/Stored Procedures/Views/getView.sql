CREATE OR ALTER PROCEDURE getView (
    @viewId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM views WHERE viewId = @viewId AND IsDeleted = 0;
END