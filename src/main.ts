
fizzBuzz(601000);

function fizzBuzz(numberInteger: number) {
  console.log(numberInteger);
  for (let index = 0; index <= numberInteger; index++) {
    if (index % 3 === 0 && index % 5 === 0 ) {
      console.log(index, "fizzBuzz");
    }
    else if (index % 3 === 0 ) {
      console.log(index, "fizz");
    }
    else if (index % 5 === 0 ) {
      console.log(index, "buzz");
    }
    
  }
}
