CREATE OR ALTER PROCEDURE deleteIncidents(@incidentId Varchar(255))
AS 
BEGIN 
UPDATE incidents SET IsDeleted = 1   WHERE incidentId = @incidentId;
END