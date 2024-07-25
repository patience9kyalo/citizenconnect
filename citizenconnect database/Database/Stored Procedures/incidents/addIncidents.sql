CREATE OR ALTER PROCEDURE addIncidents (
    @incidentId VARCHAR(255),
    @incidentLocation VARCHAR(255),
    @incidentStatus VARCHAR(255),
    @incidentDescription VARCHAR(255),
    @incidentImage VARCHAR(255)
)
AS
BEGIN
    INSERT INTO incidents (incidentId, incidentLocation, incidentStatus, incidentDescription, incidentImage)
    VALUES (@incidentId, @incidentLocation, @incidentStatus, @incidentDescription, @incidentImage);
END

