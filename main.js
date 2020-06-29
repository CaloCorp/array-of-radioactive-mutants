/******************
 * YOUR CODE HERE *
 ******************/


const addMeToEnd=function(array){
array.push('Colin')

}

const addMeToStart = function(array){

  array.unshift('Colin')
}

const changeLast = function(array,value){

  array[array.length-1] = value
}
 const changeAllValuesTo = function(array,value){

  for(let i=0; i< array.length;i++)
  array[i]=value
 }

const oddOrEven = function(array){
  for(let i=0; i< array.length;i++)
  if (array[i] % 2 ===0){

    array[i] = 'even'
  }
else array[i]= 'odd'

}

const changeNextThreeToValue = function(start,array,value){

  for(let i=start;i < start + 3;i++){
    array[i]= value
  }

}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
