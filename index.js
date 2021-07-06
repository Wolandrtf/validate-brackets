function validateBrackets(string) {
  const array1 = string.split('');
  
  let counter1 = 0;
  let counter2 = 0;
  let direction = 'open';
  
  let isCountersOnStepEqual = true;
  
  array1.forEach(el => {
    switch(true) {
      case direction === 'open' && el === '(':
        counter1++;
        break;
      case direction === 'open' && el === ')':
        direction = 'close';
        counter2++;
        break;
      case direction === 'close' && el === ')':
        counter2++;
        break;
      case direction === 'close' && el === '(':
        direction = 'open';
        counter1++;
        break;
    }
    
    if (counter2 > counter1) {
      isCountersOnStepEqual = false;
    }
  })
  

  return counter1 === counter2 && isCountersOnStepEqual;
}

module.exports.validateBrackets = validateBrackets;
