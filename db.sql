CREATE DATABASE SchoolManagement;
GO
USE SchoolManagement;
GO


CREATE TABLE Roles (
    RoleID INT IDENTITY(1,1) PRIMARY KEY,
    RoleName VARCHAR(50) NOT NULL UNIQUE
);



CREATE TABLE Users (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    RoleID INT NOT NULL,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Email VARCHAR(100) UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Status VARCHAR(10) DEFAULT 'active'
        CHECK (Status IN ('active', 'inactive')),
    CreatedAt DATETIME2 DEFAULT SYSDATETIME(),

    CONSTRAINT FK_Users_Roles
        FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);


CREATE TABLE Classes (
    ClassID INT IDENTITY(1,1) PRIMARY KEY,
    ClassName VARCHAR(50) NOT NULL,
    Section VARCHAR(10),
    CreatedAt DATETIME2 DEFAULT SYSDATETIME()
);


CREATE TABLE Subjects (
    SubjectID INT IDENTITY(1,1) PRIMARY KEY,
    SubjectName VARCHAR(100) NOT NULL,
    ClassID INT NOT NULL,

    CONSTRAINT FK_Subjects_Classes
        FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);


CREATE TABLE Teachers (
    TeacherID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    Phone VARCHAR(20),
    Address NVARCHAR(255),
    Qualification VARCHAR(100),
    JoiningDate DATE,
    Salary DECIMAL(10,2),

    CONSTRAINT FK_Teachers_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE TeacherAttendance (
    AttendanceID INT IDENTITY(1,1) PRIMARY KEY,
    TeacherID INT NOT NULL,
    AttendanceDate DATE NOT NULL,
    Status VARCHAR(10) NOT NULL
        CHECK (Status IN ('present', 'absent', 'leave')),

    CONSTRAINT FK_TeacherAttendance_Teachers
        FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);



CREATE TABLE TeacherPayment (
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,
    TeacherID INT NOT NULL,
    PaymentDate DATE NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    PaymentMethod VARCHAR(50),
    Remarks NVARCHAR(255),

    CONSTRAINT FK_TeacherPayment_Teachers
        FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);


CREATE TABLE Students (
    StudentID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT NOT NULL,
    ClassID INT NOT NULL,
    RollNumber VARCHAR(20),
    FullName VARCHAR(100) NOT NULL,
    Gender VARCHAR(10)
        CHECK (Gender IN ('male', 'female', 'other')),
    DateOfBirth DATE,
    Phone VARCHAR(20),
    Address NVARCHAR(255),
    AdmissionDate DATE,

    CONSTRAINT FK_Students_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID),
    CONSTRAINT FK_Students_Classes
        FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);


CREATE TABLE StudentAttendance (
    AttendanceID INT IDENTITY(1,1) PRIMARY KEY,
    StudentID INT NOT NULL,
    AttendanceDate DATE NOT NULL,
    Status VARCHAR(10) NOT NULL
        CHECK (Status IN ('present', 'absent', 'leave')),

    CONSTRAINT FK_StudentAttendance_Students
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);


CREATE TABLE StudentPayment (
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,
    StudentID INT NOT NULL,
    PaymentDate DATE NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    PaymentType VARCHAR(50),
    PaymentMethod VARCHAR(50),
    Remarks NVARCHAR(255),

    CONSTRAINT FK_StudentPayment_Students
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);


CREATE TABLE Exams (
    ExamID INT IDENTITY(1,1) PRIMARY KEY,
    ExamName VARCHAR(100) NOT NULL,
    ClassID INT NOT NULL,
    ExamDate DATE,
    TotalMarks INT,

    CONSTRAINT FK_Exams_Classes
        FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)
);


CREATE TABLE Notices (
    NoticeID INT IDENTITY(1,1) PRIMARY KEY,
    Title VARCHAR(150) NOT NULL,
    Description NVARCHAR(MAX),
    PublishDate DATE,
    CreatedBy INT,

    CONSTRAINT FK_Notices_Users
        FOREIGN KEY (CreatedBy) REFERENCES Users(UserID)
);


CREATE TABLE Events (
    EventID INT IDENTITY(1,1) PRIMARY KEY,
    EventTitle VARCHAR(150) NOT NULL,
    Description NVARCHAR(MAX),
    EventDate DATE,
    CreatedBy INT,

    CONSTRAINT FK_Events_Users
        FOREIGN KEY (CreatedBy) REFERENCES Users(UserID)
);


CREATE TABLE ExamResults (
    ResultID INT IDENTITY(1,1) PRIMARY KEY,
    ExamID INT NOT NULL,
    StudentID INT NOT NULL,
    MarksObtained INT,
    Grade VARCHAR(5),

    CONSTRAINT FK_ExamResults_Exams
        FOREIGN KEY (ExamID) REFERENCES Exams(ExamID),
    CONSTRAINT FK_ExamResults_Students
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);


-- Indexes for performance
CREATE INDEX IDX_Students_ClassID ON Students(ClassID);
CREATE INDEX IDX_TeacherAttendance_Date ON TeacherAttendance(AttendanceDate);
CREATE INDEX IDX_StudentAttendance_Date ON StudentAttendance(AttendanceDate);


INSERT INTO Roles (RoleName)
VALUES 
('Admin'), ('Teacher'), ('Student');


INSERT INTO Users (RoleID, Username, Email, PasswordHash, Status)
VALUES
(1,'sujay singh','sujaysingh@gmail.com','12345','active'),
(2,'bhanu kumar','bhanu@gmail.com','12345','active'),
(2,'student','student@gmail.com','12345','active'),
(2,'teacher3','t3@mail.com','hash4','active'),
(2,'teacher4','t4@mail.com','hash5','active'),
(3,'student1','s1@mail.com','hash6','active'),
(3,'student2','s2@mail.com','hash7','active'),
(3,'student3','s3@mail.com','hash8','active'),
(3,'student4','s4@mail.com','hash9','active'),
(3,'student5','s5@mail.com','hash10','active');


INSERT INTO Classes (ClassName, Section)
VALUES
('Grade 1','A'),('Grade 2','A'),('Grade 3','A'),('Grade 4','A'),
('Grade 5','A'),('Grade 6','A'),('Grade 7','A'),('Grade 8','A'),
('Grade 9','A'),('Grade 10','A');


INSERT INTO Subjects (SubjectName, ClassID)
VALUES
('Math',1),('English',2),('Science',3),('History',4),
('Geography',5),('Physics',6),('Chemistry',7),
('Biology',8),('Computer',9),('Economics',10);


INSERT INTO Teachers (UserID, FullName, Phone, Address, Qualification, JoiningDate, Salary)
VALUES
(2,'John Smith','111111','City A','MSc','2022-01-01',50000),
(3,'David Lee','222222','City B','MA','2021-02-01',48000),
(4,'Sarah Khan','333333','City C','BEd','2020-03-01',46000),
(5,'Emma Brown','444444','City D','MSc','2019-04-01',52000),
(2,'Alex Roy','555555','City E','PhD','2023-01-01',60000),
(3,'Nancy Drew','666666','City F','MSc','2021-06-01',47000),
(4,'Peter Hall','777777','City G','MA','2020-07-01',45000),
(5,'Linda Scott','888888','City H','BEd','2019-08-01',44000),
(2,'Mark Taylor','999999','City I','MSc','2022-09-01',51000),
(3,'Sophia White','101010','City J','PhD','2018-10-01',62000);


INSERT INTO TeacherAttendance (TeacherID, AttendanceDate, Status)
VALUES
(1,'2024-01-01','present'),
(2,'2024-01-01','present'),
(3,'2024-01-01','absent'),
(4,'2024-01-01','present'),
(5,'2024-01-01','leave'),
(6,'2024-01-01','present'),
(7,'2024-01-01','present'),
(8,'2024-01-01','present'),
(9,'2024-01-01','absent'),
(10,'2024-01-01','present');


INSERT INTO TeacherPayment (TeacherID, PaymentDate, Amount, PaymentMethod, Remarks)
VALUES
(1,'2024-01-31',50000,'Bank','January Salary'),
(2,'2024-01-31',48000,'Bank','January Salary'),
(3,'2024-01-31',46000,'Cash','January Salary'),
(4,'2024-01-31',52000,'Bank','January Salary'),
(5,'2024-01-31',60000,'Bank','January Salary'),
(6,'2024-01-31',47000,'Cash','January Salary'),
(7,'2024-01-31',45000,'Bank','January Salary'),
(8,'2024-01-31',44000,'Bank','January Salary'),
(9,'2024-01-31',51000,'Cash','January Salary'),
(10,'2024-01-31',62000,'Bank','January Salary');


INSERT INTO Students (UserID, ClassID, RollNumber, FullName, Gender, DateOfBirth, Phone, Address, AdmissionDate)
VALUES
(6,1,'R1','Student One','male','2010-01-01','111','City A','2020-01-01'),
(7,2,'R2','Student Two','female','2011-02-01','222','City B','2020-01-01'),
(8,3,'R3','Student Three','male','2010-03-01','333','City C','2020-01-01'),
(9,4,'R4','Student Four','female','2012-04-01','444','City D','2020-01-01'),
(10,5,'R5','Student Five','male','2011-05-01','555','City E','2020-01-01'),
(6,6,'R6','Student Six','female','2010-06-01','666','City F','2020-01-01'),
(7,7,'R7','Student Seven','male','2012-07-01','777','City G','2020-01-01'),
(8,8,'R8','Student Eight','female','2011-08-01','888','City H','2020-01-01'),
(9,9,'R9','Student Nine','male','2010-09-01','999','City I','2020-01-01'),
(10,10,'R10','Student Ten','female','2011-10-01','101','City J','2020-01-01');


INSERT INTO StudentAttendance (StudentID, AttendanceDate, Status)
VALUES
(1,'2024-01-01','present'),
(2,'2024-01-01','present'),
(3,'2024-01-01','absent'),
(4,'2024-01-01','present'),
(5,'2024-01-01','leave'),
(6,'2024-01-01','present'),
(7,'2024-01-01','present'),
(8,'2024-01-01','present'),
(9,'2024-01-01','absent'),
(10,'2024-01-01','present');


INSERT INTO StudentPayment (StudentID, PaymentDate, Amount, PaymentType, PaymentMethod, Remarks)
VALUES
(1,'2024-01-10',2000,'Tuition','Cash','January Fee'),
(2,'2024-01-10',2000,'Tuition','Bank','January Fee'),
(3,'2024-01-10',2000,'Tuition','Cash','January Fee'),
(4,'2024-01-10',2000,'Tuition','Bank','January Fee'),
(5,'2024-01-10',2000,'Tuition','Cash','January Fee'),
(6,'2024-01-10',2000,'Tuition','Bank','January Fee'),
(7,'2024-01-10',2000,'Tuition','Cash','January Fee'),
(8,'2024-01-10',2000,'Tuition','Bank','January Fee'),
(9,'2024-01-10',2000,'Tuition','Cash','January Fee'),
(10,'2024-01-10',2000,'Tuition','Bank','January Fee');


INSERT INTO Exams (ExamName, ClassID, ExamDate, TotalMarks)
VALUES
('Midterm',1,'2024-02-01',100),
('Midterm',2,'2024-02-02',100),
('Midterm',3,'2024-02-03',100),
('Midterm',4,'2024-02-04',100),
('Midterm',5,'2024-02-05',100),
('Midterm',6,'2024-02-06',100),
('Midterm',7,'2024-02-07',100),
('Midterm',8,'2024-02-08',100),
('Midterm',9,'2024-02-09',100),
('Midterm',10,'2024-02-10',100);


INSERT INTO Notices (Title, Description, PublishDate, CreatedBy)
VALUES
('Holiday','School closed','2024-01-01',1),
('Exam','Midterm exam','2024-01-02',1),
('Fee','Fee reminder','2024-01-03',1),
('Event','Sports Day','2024-01-04',1),
('Meeting','Parents meeting','2024-01-05',1),
('Result','Exam result','2024-01-06',1),
('Holiday','Festival holiday','2024-01-07',1),
('Notice','Uniform mandatory','2024-01-08',1),
('Exam','Final exam','2024-01-09',1),
('General','School timing','2024-01-10',1);


INSERT INTO Events (EventTitle, Description, EventDate, CreatedBy)
VALUES
('Sports Day','Annual sports','2024-02-01',1),
('Science Fair','Science exhibition','2024-02-02',1),
('Cultural Day','Cultural program','2024-02-03',1),
('Workshop','Teacher workshop','2024-02-04',1),
('Seminar','Student seminar','2024-02-05',1),
('Picnic','School picnic','2024-02-06',1),
('Competition','Math competition','2024-02-07',1),
('Function','Annual function','2024-02-08',1),
('Training','Staff training','2024-02-09',1),
('Celebration','Foundation day','2024-02-10',1);


INSERT INTO ExamResults (ExamID, StudentID, MarksObtained, Grade)
VALUES
(1,1,85,'A'),
(2,2,78,'B'),
(3,3,65,'C'),
(4,4,90,'A'),
(5,5,55,'D'),
(6,6,88,'A'),
(7,7,72,'B'),
(8,8,80,'A'),
(9,9,60,'C'),
(10,10,95,'A');
