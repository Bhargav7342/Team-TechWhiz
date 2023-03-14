﻿using Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities
{
    public class PatientRepo:IPatient
    {
        private readonly ProjectDatabaseContext context;
        public PatientRepo(ProjectDatabaseContext _context) 
        { 
            context= _context;
        }

        public List<Patient> GetAllPatient()
        {
            return context.Patients.ToList();
        }

        public Patient DeletePatient(string email)
        {
            var patient = context.Patients.Where(p=>p.Email == email).FirstOrDefault();
            context.Patients.Remove(patient);
            context.SaveChanges();
            return patient;
        }

        public Patient RegisterPatient(Patient patient)
        {
            context.Patients.Add(patient);
            context.SaveChanges();
            return patient;
        }

        public Patient UpdatePatient(Patient patient)
        {
            context.Patients.Update(patient);
            context.SaveChanges();
            return patient;
        }
    }
}
