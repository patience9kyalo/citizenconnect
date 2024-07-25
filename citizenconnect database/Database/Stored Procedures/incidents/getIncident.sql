CREATE OR ALTER PROCEDURE getIncident (
    @incidentId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM incidents WHERE incidentId = @incidentId AND IsDeleted = 0
END