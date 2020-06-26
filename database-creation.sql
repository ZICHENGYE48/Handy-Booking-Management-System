-- Create Industry table
CREATE TABLE Industry
(
    IndustryId INT IDENTITY PRIMARY KEY,
	IndustryType NVARCHAR(250) NOT NULL,
    IndustryDescription NVARCHAR(3000) NOT NULL
)

-- Create Company table
CREATE TABLE Company
(
    CompanyId INT IDENTITY PRIMARY KEY,
	IndustryId_FK INT NOT NULL, 
	CONSTRAINT FK_Company FOREIGN KEY (IndustryId_FK)
	REFERENCES Industry (IndustryId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
    Email NVARCHAR(256) NOT NULL,
	CompanyName NVARCHAR(256) NOT NULL,
	CompanyAddress NVARCHAR(2000) NOT NULL,
	Phone INT NOT NULL
)

-- Create Administrator table
CREATE TABLE Administrator
(
    AdministratorId INT IDENTITY PRIMARY KEY,
	CompanyId_FK INT NOT NULL, 
	CONSTRAINT FK_Administrator FOREIGN KEY (CompanyId_FK)
	REFERENCES Company (CompanyId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
    FirstName NVARCHAR(128) NOT NULL,
    MiddelInitial NVARCHAR(10),
    LastName NVARCHAR(128) NOT NULL,
    DateOfBirth DATE NOT NULL,
	Email NVARCHAR(256) NOT NULL,
	PasswordAdmin NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	AddressAdmin NVARCHAR(2000) NOT NULL
)


-- Create Tradie table
CREATE TABLE Tradie
(
    TradieId INT IDENTITY PRIMARY KEY,
	CompanyId_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie FOREIGN KEY (CompanyId_FK)
	REFERENCES Company (CompanyId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	--Id INT REFERENCES Tradie_Service (Id),
    FirstName NVARCHAR(128) NOT NULL,
    MiddelInitial NVARCHAR(10),
    LastName NVARCHAR(128) NOT NULL,
    DateOfBirth DATE NOT NULL,
	Email NVARCHAR(256) NOT NULL,
	UsernameTradie NVARCHAR(256) NOT NULL,
	PasswordTradie NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	AddressTradie NVARCHAR(2000) NOT NULL,
	TradieDescription NVARCHAR(3000) NOT NULL
)

-- Create Service table
CREATE TABLE Service
(
    ServiceId INT IDENTITY PRIMARY KEY,
	--Id INT REFERENCES Tradie_Service (Id),
    ServiceName NVARCHAR(500) NOT NULL,
	FeePerHour INT NOT NULL,
	ServiceDescription NVARCHAR(3000) NOT NULL
)

-- Create Tradie_Service table
CREATE TABLE Tradie_Service
(
    Id INT IDENTITY PRIMARY KEY,
	TradieId_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie_Service FOREIGN KEY (TradieId_FK)
	REFERENCES Tradie (TradieId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	ServiceId_FK INT NOT NULL, 
	CONSTRAINT FK_Service_Tradie FOREIGN KEY (ServiceId_FK)
	REFERENCES Service (ServiceId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
    LastUpdateTime DATE NOT NULL
)

-- Create Customer table
CREATE TABLE Customer
(
    CustomerId INT IDENTITY PRIMARY KEY,
	--BookingId_FK INT NOT NULL, 
	--CONSTRAINT FK_Booking FOREIGN KEY (BookingId_FK)
	--REFERENCES Booking (BookingId)
	--ON DELETE CASCADE
   -- ON UPDATE CASCADE,
	Email NVARCHAR(256) NOT NULL,
	Username NVARCHAR(256) NOT NULL,
	Password NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	Address NVARCHAR(2000) NOT NULL
)

-- Create Transaction table
CREATE TABLE Transaction_Detail
(
    TransactionId INT IDENTITY PRIMARY KEY,
	--Transaction_FK INT NOT NULL, 
	--CONSTRAINT FK_Transaction FOREIGN KEY (Transaction_FK)
	--REFERENCES Booking (BookingId)
	--ON DELETE CASCADE
    --ON UPDATE CASCADE,
	TransactionAmount INT NOT NULL,
	TransactionTime DATE NOT NULL,
	--Status ENUM('successful', 'failure')DEFAULT 'failure'
	
)

-- Create Booking table
CREATE TABLE Booking
(
    BookingId INT IDENTITY PRIMARY KEY,
	Tradie_Service_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie_Service_Booking FOREIGN KEY (Tradie_Service_FK)
	REFERENCES Tradie_Service (Id)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	CustomerId_FK INT NOT NULL, 
	CONSTRAINT FK_Customer FOREIGN KEY (CustomerId_FK)
	REFERENCES Customer (CustomerId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	TransactionId_FK INT NOT NULL, 
	CONSTRAINT FK_Transaction FOREIGN KEY (TransactionId_FK)
	REFERENCES Transaction_Detail (TransactionId)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	BookingCreatedTime DATE NOT NULL,
	BookingUpdatedTime DATE,
	CustomerAssignedAddress NVARCHAR(2000) NOT NULL,
	ServiceTime DATE NOT NULL,
	EstimateServiceDuration INT NOT NULL,
	ActualServiceDuration INT NOT NULL,
	BookingFee INT NOT NULL,
	--Status ENUM('Pending', 'Processing', 'Booked', 'Cancelled', 'Rebooked')DEFAULT 'Pending',
	--BookingAcceptedByTradie ENUM('yes', 'no')DEFAULT 'no'
)



