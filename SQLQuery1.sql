-- Create Administrator table
CREATE TABLE Administrator
(
    AdministratorId INT IDENTITY PRIMARY KEY,
	CompanyId INT REFERENCES Company (CompanyId),
    FirstName NVARCHAR(128) NOT NULL,
    MiddelInitial NVARCHAR(10),
    LastName NVARCHAR(128) NOT NULL,
    DateOfBirth DATE NOT NULL,
	Email NVARCHAR(256) NOT NULL,
	PasswordAdmin NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	AddressAdmin NVARCHAR(2000) NOT NULL
)

-- Create Company table
CREATE TABLE Company
(
    CompanyId INT IDENTITY PRIMARY KEY,
	IndustryId INT REFERENCES Industry (IndustryId),
    Email NVARCHAR(256) NOT NULL,
	CompanyName NVARCHAR(256) NOT NULL,
	CompanyAddress NVARCHAR(2000) NOT NULL,
	Phone INT NOT NULL
)

-- Create Industry table
CREATE TABLE Industry
(
    IndustryId INT IDENTITY PRIMARY KEY,
	IndustryType NVARCHAR(250) NOT NULL,
    IndustryDescription NVARCHAR(3000) NOT NULL
)

-- Create Tradie table
CREATE TABLE Tradie
(
    TradieId INT IDENTITY PRIMARY KEY,
	CompanyId INT REFERENCES Company (CompanyId),
	Id INT REFERENCES Tradie_Service (Id),
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

-- Create Tradie_Service table
CREATE TABLE Tradie_Service
(
    Id INT IDENTITY PRIMARY KEY,
	TradieId INT REFERENCES Tradie (TradieId),
	ServiceId INT REFERENCES Service (ServiceId),
    LastUpdateTime DATE NOT NULL
)

-- Create Service table
CREATE TABLE Service
(
    ServiceId INT IDENTITY PRIMARY KEY,
	Id INT REFERENCES Tradie_Service (Id),
    ServiceName NVARCHAR(500) NOT NULL,
	FeePerHour INT NOT NULL,
	ServiceDescription NVARCHAR(3000) NOT NULL
)

-- Create Customer table
CREATE TABLE Customer
(
    CustomerId INT IDENTITY PRIMARY KEY,
	BookingId INT REFERENCES Booking (BookingId),
	Email NVARCHAR(256) NOT NULL,
	Username NVARCHAR(256) NOT NULL,
	Password NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	Address NVARCHAR(2000) NOT NULL
)

-- Create Booking table
CREATE TABLE Booking
(
    BookingId INT IDENTITY PRIMARY KEY,
	Id INT REFERENCES Tradie_Service (Id),
	CustomerId INT REFERENCES Customer (CustomerId),
	TransactionId INT REFERENCES Transaction (TransactionId),
	BookingCreatedTime DATE NOT NULL,
	BookingUpdatedTime DATE,
	CustomerAssignedAddress NVARCHAR(2000) NOT NULL,
	ServiceTime DATE NOT NULL,
	EstimateServiceDuration INT NOT NULL,
	ActualServiceDuration INT NOT NULL,
	BookingFee INT NOT NULL,
	Status ENUM('Pending', 'Processing', 'Booked', 'Cancelled', 'Rebooked')DEFAULT 'Pending',
	BookingAcceptedByTradie ENUM('yes', 'no')DEFAULT 'no'
)

-- Create Transaction table
CREATE TABLE Transaction
(
    TransactionId INT IDENTITY PRIMARY KEY,
	BookingId INT REFERENCES Booking (BookingId),
	TransactionAmount INT NOT NULL,
	TransactionTime DATE NOT NULL,
	Status ENUM('successful', 'failure')DEFAULT 'failure'
	
)

-- Create Credit table
--CREATE TABLE Credit
--(
--    StudentId INT REFERENCES Student (StudentId),
--    CourseId INT REFERENCES Course (CourseId),
--    Grade DECIMAL(5,2) CHECK (Grade <= 100.00),
--    Attempt TINYINT,
--    CONSTRAINT [UQ_studentgrades] UNIQUE CLUSTERED
--    (
--        StudentId, CourseId, Grade, Attempt
--    )
--)