$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    const formInt = parseInt($("input#numberInput").val());

    let newArr = [formInt];
    for (let i=0; i < formInt;i += 1) {
      let newInt = (newArr[i]-1);
      if (newInt === 0) {
        break;
      };
      newArr.push(newInt);
      // console.log(newArr);
    }
    
    
    let facNum = newArr.reduce((a, b) => a * b);
    console.log(facNum);
    $("#result").text(facNum);
    
    // for (i = 0; i < newArr.length; i +=1) {
    //   let facNum = newArr[i];
    //   facNum *= newArr[i];
    //   console.log(facNum);
    // }
    // for (let i = 1; i < newArr.length; i++) {
    //   let newFacNum = newArr[i] * i;
    //   // console.log(newFacNum);
    // };

      // for (let i=1; i<newArr.length; i+=1) {
      //   let facNum = newArr[0] * newArr[1];
      //   let newFacNum = facNum
      //   newFacNum *= newArr[2+i];
      //   console.log(newFacNum);

  });
});


