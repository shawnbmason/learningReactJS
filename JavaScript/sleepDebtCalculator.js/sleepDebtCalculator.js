const getSleepHours = (day) => {
    switch (day) {
      case 'Monday':
        return 8;
      case 'Tuesday':
        return 7;
      case 'Wednesday':
        return 5;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 10;
      case 'Saturday':
        return 7;
      case 'Sunday':
        return 6;
    }
  }
  
  const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7; 
  }
  
  const calculateSleepDebt = () => {
  
    actualSleepHours = getActualSleepHours()
    idealSleepHours = getIdealSleepHours()
    underHours = idealSleepHours - actualSleepHours
    overHours = actualSleepHours - idealSleepHours
  
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep for your tageted goal for the week."
    } else if (actualSleepHours > idealSleepHours) {
      return `You got ${overHours} hours over your tageted goal for the week. You got more sleep then you needed.`
    } else if (actualSleepHours < idealSleepHours) {
      return `You got ${underHours} hours under your tageted goal for the week. You should get more sleep.` 
    } else {
      return "Error"
    }
  }
  
  console.log(calculateSleepDebt());