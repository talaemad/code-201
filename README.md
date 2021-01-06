# code-201
The labs for this session

Driver =>Abdalrhman Albdahat

Navigator => Tala

``` 
function valNumber(mess){
  var num = prompt(mess);
  while (num === undefined || num === null || num === '') {
    num = prompt(mess);
  }
  num = Number(num);
   

  var value =Number.isInteger(num)  ;
  
  if (value ) {
    
    return num;
    
  }
  else {
    valNumber("no please enter number");
  }
  
}
```