const randNum = document.querySelector(".random-num ");
const generateBtn = document.querySelector(".gen-btn button");

generateBtn.addEventListener("click",()=>{
    let num = (1+Math.random()*1000).toFixed();                     //genrate  number btween 1-1000 no decimals
    let randomColor = Math.random().toString(16).substring(2,8);    //generate a random 16base string and retrive 6 digits
    randomColor = "#"+randomColor;                                  //turn into  a hexa color by appending #
    randNum.style.color = randomColor;                              //change the color of number 
    randNum.innerHTML = '<span>'+num+'</span>';                     //display the number
})

