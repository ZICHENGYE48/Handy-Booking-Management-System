-- Create Industry table
CREATE TABLE Industry
(
    IndustryID INT IDENTITY PRIMARY KEY,
	Type NVARCHAR(250) ,
    Description NVARCHAR(3000) 
)

-- Create Company table
CREATE TABLE Company
(
    CompanyID INT IDENTITY PRIMARY KEY,
	IndustryID_FK INT NOT NULL, 
	CONSTRAINT FK_Company FOREIGN KEY (IndustryID_FK)
	REFERENCES Industry (IndustryID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
    Email NVARCHAR(256) NOT NULL,
	CompanyName NVARCHAR(256) NOT NULL,
	Address NVARCHAR(2000) NOT NULL,
	Phone INT NOT NULL
)

-- Create Administrator table
CREATE TABLE Administrator
(
    AdminID INT IDENTITY PRIMARY KEY,
	CompanyID_FK INT NOT NULL, 
	CONSTRAINT FK_Administrator FOREIGN KEY (CompanyID_FK)
	REFERENCES Company (CompanyID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	Email NVARCHAR(256) NOT NULL,
	Password NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	Address NVARCHAR(2000) NOT NULL,
    DateOfBirth DATE ,
	FirstName NVARCHAR(128) NOT NULL,
    MiddelInitial NVARCHAR(10),
    LastName NVARCHAR(128) NOT NULL
)


-- Create Tradie table
CREATE TABLE Tradie
(
    TradieID INT IDENTITY PRIMARY KEY,
	CompanyID_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie FOREIGN KEY (CompanyID_FK)
	REFERENCES Company (CompanyID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	Email NVARCHAR(256) NOT NULL,
	Password NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	Address NVARCHAR(2000) NOT NULL,
    FirstName NVARCHAR(128) NOT NULL,
    MiddelInitial NVARCHAR(10),
    LastName NVARCHAR(128) NOT NULL,
	AvailableTime NVARCHAR(2000) NOT NULL,
	Description NVARCHAR(3000) 
)

-- Create Service table
CREATE TABLE Service
(
    ServiceID INT IDENTITY PRIMARY KEY,
    ServiceName NVARCHAR(500) NOT NULL,
	FeePerHour INT NOT NULL,
	Description NVARCHAR(3000) NOT NULL
)

-- Create Tradie_Service table
CREATE TABLE Tradie_Service
(
    ID INT IDENTITY PRIMARY KEY,
	TradieID_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie_Service FOREIGN KEY (TradieID_FK)
	REFERENCES Tradie (TradieID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	ServiceID_FK INT NOT NULL, 
	CONSTRAINT FK_Service_Tradie FOREIGN KEY (ServiceID_FK)
	REFERENCES Service (ServiceID)
	ON DELETE CASCADE
    ON UPDATE CASCADE
)

-- Create Customer table
CREATE TABLE Customer
(
    CustomerID INT IDENTITY PRIMARY KEY,
	Email NVARCHAR(256) NOT NULL,
	Username NVARCHAR(256) NOT NULL,
	Password NVARCHAR(128) NOT NULL,
	Phone INT NOT NULL,
	Address NVARCHAR(2000) NOT NULL
)

-- Create Booking table
CREATE TABLE Booking
(
    BookingID INT IDENTITY PRIMARY KEY,
	Tradie_Service_FK INT NOT NULL, 
	CONSTRAINT FK_Tradie_Service_Booking FOREIGN KEY (Tradie_Service_FK)
	REFERENCES Tradie_Service (ID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	CustomerID_FK INT NOT NULL, 
	CONSTRAINT FK_Customer FOREIGN KEY (CustomerID_FK)
	REFERENCES Customer (CustomerID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	BookingCreatedTime DATE NOT NULL,
	BookingUpdatedTime DATE,
	CustomerAssignedAddress NVARCHAR(2000) NOT NULL,
	ServiceTime DATE NOT NULL,
	ServiceDuration INT NOT NULL,
	BookingFee INT NOT NULL,
	Status varchar(15) NOT NULL CHECK (Status IN('Pending', 'Processing', 'Booked', 'Cancelled', 'Rebooked')),
	BookingAcceptedByTradie varchar(10) NOT NULL CHECK (BookingAcceptedByTradie IN('Yes', 'No'))
)

-- Create Transaction table
CREATE TABLE Transaction_Detail
(
    TransactionID INT IDENTITY PRIMARY KEY,
	BookingID_FK INT NOT NULL, 
	CONSTRAINT FK_Transaction FOREIGN KEY (BookingID_FK )
	REFERENCES Booking (BookingID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	TransactionAmount INT NOT NULL,
	TransactionTime DATE NOT NULL,
	Status varchar(15) NOT NULL CHECK (Status IN('Successful', 'Failure'))
)

-- Create Bank_Info table
CREATE TABLE Bank_Info
(
    ID INT IDENTITY PRIMARY KEY,
	TradieID_FK INT, 
	CONSTRAINT FK_Bank_Info FOREIGN KEY (TradieID_FK)
	REFERENCES Tradie (TradieID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	CustomerID_FK INT, 
	CONSTRAINT FK_Bank_Info2 FOREIGN KEY (CustomerID_FK)
	REFERENCES Customer (CustomerID)
	ON DELETE CASCADE
    ON UPDATE CASCADE,
	CardNumber NVARCHAR(30) NOT NULL,
    NameOnCard NVARCHAR(30) NOT NULL,
	BSB NVARCHAR(15) NOT NULL
)