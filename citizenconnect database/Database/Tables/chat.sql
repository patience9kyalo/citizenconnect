USE citizenconnect360;

CREATE TABLE Chat (
    chatId VARCHAR(255) PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    response VARCHAR(255),    
    createdAt DATETIME DEFAULT GETDATE(),
    isDeleted INT DEFAULT 0,

    Id VARCHAR(255) FOREIGN KEY REFERENCES users(Id),
    viewId VARCHAR(255) FOREIGN KEY REFERENCES views(viewId),
    incidentId VARCHAR(255) FOREIGN KEY REFERENCES incidents(incidentId)
)

