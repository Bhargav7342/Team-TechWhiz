type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}

//Patient Table
export interface Patient{
    patientId:string;
    FirstName:string;
    LastName:string;
    Email:string;
    Password:string;
    Phone:string;
    Gender:string;
    DateOfBirth:string;
    City:string;
    State:string;
    Zipcode:string
    BloodGroup:string;
}

//Health History Table
export interface HealthHistory {
    HhId:GUID;
    patientId:GUID;
    Date:string;
    DoctorName:string;
    Diagnosis:string;
}

//Prescription Table

export interface Prescription{
    PrescriptionId:GUID;
    HhId:GUID;
    MedicineName:string;
    Dosage:string;
    Note:string;
}

//Doctor table
export interface Doctor{
    DoctorId:GUID;
    DoctorName:string;
    Email:string;
    Qualification:string;
    Department:string;
}


//Availability Table
export interface PhysicianAvailabilityStatus{
    AvailabilityId :GUID;
    DoctorId:GUID;
    Sunday:boolean;
    Monday:boolean;
    Tuesday:boolean;
    Wednesday:boolean;
    Thursday:boolean;
    Friday:boolean;
    Saturday:boolean;
}

//Appointment Table
export interface Appointment{
    appointmentId:string;
    patientId :string;
    doctorId :string;
    date :string;
    doctorName:string;
    concerns:string;
    status:string;
}

//PatientIntialCheckup Table 

export interface PatientIntialCheckup{
    PicId :GUID;
    AppointmentId :GUID;
    Height :number;
    Weight :number;
    Temperature :number;
    Spo2 :number;
    BloodPressure :string;
    SugarLevel :number;
    AdditionalDetails :string;
    ChechupStatus :boolean;
}

//Allergy Table 
export interface Allergy{
    AllergyId :GUID;
    AllergyName :string;
    PatientId :GUID;
}