CREATE TABLE [Patient] (
  [Patient_Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
  [First_Name] varchar(30),
  [Last_Name] varchar(30),
  [Email] varchar(50) UNIQUE,
  [Password] varchar(20),
  [Phone] varchar(15),
  [Gender] varchar(6),
  [Date_of_Birth] Date,
  [City] varchar(25),
  [State] varchar(25),
  [Zipcode] varchar(6),
  [Blood_group] varchar(10)
);

CREATE TABLE [Health_History] (
  [HH_Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
  [Patient_Id] UNIQUEIDENTIFIER,
  [Date] Date,
  [Doctor_Name] varchar(80),
  [Diagnosis] varchar(max),
  CONSTRAINT [FK_Health_History.Patient_Id]
    FOREIGN KEY ([Patient_Id])
      REFERENCES [Patient]([Patient_Id]) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE [Prescriptions] (
  [Prescription_Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
  [HH_ID] UNIQUEIDENTIFIER,
  [Medicine_Name] varchar(50),
  [Dosage] varchar(7),
  [Note] varchar(max),
  CONSTRAINT [FK_Prescriptions.HH_Id]
    FOREIGN KEY ([HH_Id])
      REFERENCES [Health_History]([HH_Id]) ON DELETE CASCADE ON UPDATE CASCADE
);

insert into Patient(First_Name,Last_Name,Email,[Password],Phone,Gender,Date_of_Birth,City,[State],Zipcode,Blood_group) 
values('Syed','Sohail','Solu@gmail.com','Sohail@123','9876543210','Male','01/01/2000','Gunturu','AndraPradesh','523105','A+');


insert into Health_History(Patient_Id,Date,Doctor_Name,Diagnosis) 
values('df0052a7-4a10-4bf3-b5e3-7bcac4bf2ffb','12/03/2023','Dr. ABC','He is completely fine');

select * from Patient
select * from Health_History


