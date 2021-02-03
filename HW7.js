let user = {
  name: 'John',
  surname: 'Smith',
};

user.name = 'Peter';
delete user.name;

let isEmpty (checkObject){
  for(key in checkObject){
      if(key in checkObject == true){
          return false;
          break;
      }else{
          return true;
      }
  }
}

let calSalary (salaryObject){
    if (isEmpty(salaryObject) == true) return 0;
    let sum = 0;
    for (key in salaryObject){
        sum += salaryObject[key];
    }
    return key;
}

let multiplyNumeric(obj){
    for (key in obj){
        if(typeof obj[key] === 'number') obj[key] *=2;
    }
}