use citizenconnect360

CREATE TABLE users(
    Id Varchar(255)PRIMARY KEY,
    Name Varchar(255) NOT NULL,
    Email Varchar(255) NOT NULL UNIQUE,
    Role Varchar (255) NOT NULL,
    Password Varchar(255) NOT NULL,
    IsDeleted INT DEFAULT 0,
    IsEmailSent INT DEFAULT 0,
    IsApproved INT,
    FOREIGN KEY (Role) REFERENCES Role(Name)
) 





