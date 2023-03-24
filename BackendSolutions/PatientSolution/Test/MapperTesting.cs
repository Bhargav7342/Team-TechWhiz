using EF = DataEntities.Entities;
using Models;
using Patient_Logic;
namespace Test
{
    [TestFixture]
    public class MapperTesting
    {
        [Test]
        public void TestPatient()
        {
            Models.Patient pat = new Models.Patient();
            var ps=Mapper.Map(pat);
            Assert.That(typeof(EF.Patient),Is.EqualTo(ps.GetType()));

        }
        [Test]
        public void TestPatient1()
        {
            EF.Patient pat = new EF.Patient();
            var ps=Mapper.Map(pat);
            Assert.That(typeof(Models.Patient),Is.EqualTo(ps.GetType()));
        }
        [Test]
        public void TestHealthHistory()
        {
            Models.HealthHistory pat = new Models.HealthHistory();
            var ps=Mapper.Map(pat);
            Assert.That(typeof(EF.HealthHistory),Is.EqualTo(ps.GetType()));
        }
        [Test]
        public void TestHealthHistory2()
        {
            EF.HealthHistory pat = new EF.HealthHistory();
            var ps=Mapper.Map(pat);
            Assert.That(typeof(Models.HealthHistory),Is.EqualTo(ps.GetType()));
        }
        [Test]
        public void PrescriptionTest()
        {
            Models.Prescriptions prescr= new Models.Prescriptions();
            var ps=Mapper.Map(prescr);
            Assert.That(typeof(EF.Prescription),Is.EqualTo(ps.GetType()));  
        }
        [Test]
        public void TestPrescription()
        {
            EF.Prescription prescription = new EF.Prescription();
            var ps=Mapper.Map(prescription);
            Assert.That(typeof(Models.Prescriptions),Is.EqualTo(ps.GetType()));
        }
        
    }
}