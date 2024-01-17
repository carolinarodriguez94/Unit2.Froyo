// Prompt the user for a list of strings separated by commas.
let userInputString = prompt(
    "Enter a list of comma-separated froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // Split the string into an array of strings.
  const froyoFlavors = userInputString.split(",");

  let froyo= {};
 //loop to iterate through flavors
//  function getfroyoFlavors(Arr){
 
// for(let i = 0; i < Arr.length;i++){
//  //froyo obj = {}
//   if(!froyo[Arr[i]]){
//     froyo[Arr[i]]= 0;
//     //froyo obj = {froyoFlavors[i]: 0} || froyo obj = {Vanilla: 0};
//   }
//   //now that it is 0 we want to make sure every time this runs we add one;
//   froyo[Arr[i]] += 1; 
// } 
// console.log(froyo);
// console.table(froyo);
//  }
// storing amount of each flavor user orders in an Object
//console.log(Object.entries(froyoFlavors));
//  getfroyoFlavors(froyoFlavors);


 const getFroyoFlavors2 = function (Arr){
//logic goes here
for(let i = 0; i < Arr.length;i++){
  //froyo obj = {}
   if(!froyo[Arr[i]]){
     froyo[Arr[i]]= 0;
     //froyo obj = {froyoFlavors[i]: 0} || froyo obj = {Vanilla: 0};
   }
   //now that it is 0 we want to make sure every time this runs we add one;
   froyo[Arr[i]] += 1; 
 } 
 console.log(froyo);
 console.table(froyo);
 }

 const getFroyoFlavors3 = (Arr) =>{Arr.split('')}
 console.log(getFroyoFlavors2(froyoFlavors));