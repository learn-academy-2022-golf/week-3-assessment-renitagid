const fibonacci1 = (number) => {
    if (number > 0) {
      let fiboArray = [0, 1];
      for (let i = 1; i < number; i++) {
        fiboArray = [...fiboArray, fiboArray[i] + fiboArray[i - 1]];
      }
      fiboArray.shift();
      return fiboArray;
    } else {
      return "Please enter an integer higher than 0";
    }}

    console.log(fibonacci1(0))
