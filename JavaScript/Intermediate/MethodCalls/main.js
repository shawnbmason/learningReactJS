class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff; //the math to determain how may days you have left of vacation days left
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  console.log(surgeonRomero.name); //prints name of surgeon
  surgeonRomero.takeVacationDays(3); //how many days you taken off
  
  console.log(surgeonRomero.remainingVacationDays); //console logging the results