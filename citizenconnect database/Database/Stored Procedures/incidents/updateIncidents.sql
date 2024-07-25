CREATE OR ALTER PROCEDURE updateIncidents(

    @incidentId VARCHAR(255),
    @incidentLocation VARCHAR(255),
    @incidentStatus VARCHAR(255),
    @incidentDescription VARCHAR(255),
    @incidentImage VARCHAR(255)

)

AS 
BEGIN 
UPDATE incidents SET incidentLocation = @incidentLocation, incidentDescription = @incidentDescription, incidentImage = @incidentImage WHERE incidentId = @incidentId AND IsDeleted = 0
END