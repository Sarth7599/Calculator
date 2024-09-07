const input = document.querySelector('.display');

const appendToDisplay = (btn) => {
    input.value += btn;
    console.log(input.value);
}
 const allClear = () => {
    input.value = "";
 } 
 const calc = () => {
    try{
    input.value = eval(input.value);
 }
 catch(e){
    input.value = 'error';
 }
   
 }
 const clear = () => {
    input.value -= btn;
    console.log(input.value);
 }