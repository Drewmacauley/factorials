$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    const formInt = parseInt($("input#numberInput").val());

    newArr = [formInt];
    for (let i=0; i < formInt;i += 1) {
      let newInt = (newArr[i]-1);
      if (newInt === 0) {
        break;
      };
      newArr.push(newInt);
      console.log(newArr);
    }
    
    // let factorial = 1
    // newArr.forEach(function(number){
    //   factorial *= number;
      
   

      for (let i=1; i<newArr.length; i+=1) {
        let facNum = newArr[0] * newArr[1];
        let newFacNum = 1
        newFacNum *= newArr[2+i];
        console.log(newFacNum);
        

      }
      
    
    
      
  

  });
});


