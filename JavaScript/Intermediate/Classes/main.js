class HospitalEmployee {
    constructor(name, insurance) {
     this._name = name;
     this._remainingVacationDays = 20;
     this._insurance = insurance;
    }

    static generatePassword() {
        return Math.round(Math.random() * 10000);
    }

    get name() {
      return this._name;
      }
  
    get insurance() {
      return this._insurance;
      }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }

console.log(HospitalEmployee.generatePassword);



class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  
    get certifications() {
      return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
  }

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
  
console.log(nurseOlynyk.name);
console.log(nurseOlynyk.certifications);
  
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
    
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);



class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
    }

    get insurance() {
        return this._insurance;
    }

    addInsurance(newInsurance) {
        this._insurance.push(newInsurance);
    }
}

const doctorBob = new Doctor('Bob', ['Blue Cross', 'Red Cross']);

console.log(doctorBob.name);
console.log(doctorBob.insurance);

doctorBob.addInsurance('Other Insurance');
console.log(doctorBob.insurance);

doctorBob.takeVacationDays(12);
console.log(doctorBob.remainingVacationDays)