const getStudyHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 4;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      alert('You entered incorrectly....');
      break;
  }
};
console.log(getStudyHours("saturday"));