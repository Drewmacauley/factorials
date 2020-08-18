$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    const formInt = parseInt($("input#numberInput").val());

    newArr = [formInt];
    for (let i=0; i < formInt;i += 1) {
      let newInt = (newArr[i]-1);
      newArr.push(newInt);
      console.log(newArr);
    }
    
    // let intArray = [];

    // for (let i = formInt; i < intArray.length; i +=1) {
    //   intArray.push(formInt[i])
    //}
  });
});


