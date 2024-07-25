use citizenconnect360

CREATE TABLE incidents(

    incidentId Varchar(255)PRIMARY KEY,
    incidentLocation Varchar(255) NOT NULL,
    incidentStatus Varchar(255) NOT NULL UNIQUE,
    incidentDescription Varchar (255) NOT NULL,
    incidentImage VARCHAR(255) NOT NULL,
    IsDeleted INT DEFAULT 0

) 






