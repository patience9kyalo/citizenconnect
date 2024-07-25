CREATE OR ALTER PROCEDURE addChat (

    @chatId VARCHAR(255),
    @question VARCHAR(255),
    @response VARCHAR(255),    
    @Id VARCHAR(255),
    @viewId VARCHAR(255),
    @incidentId VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Chat (chatId, question, response, Id, viewId,incidentId)
    VALUES (@chatId, @question, @response, @Id, @viewId, @incidentId);
END

