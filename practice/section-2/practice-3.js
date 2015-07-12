function findElement(collection){
  var array = [];
  for( var i = 0; i < collection.length-1; i++){
    if(collection[i].charAt(0) != collection[i+1].charAt(0)){
        array.push(collection[i].charAt(0));
    }
  }
  if(collection[collection.length-2].charAt(0) != collection[collection.length-1].charAt(0)){
      array.push(collection[collection.length-1].charAt(0));
  }
  return array;
}


function countElement(collection,str,temp){
  for(var j = 0; j < collection.length; j++){
    if(str === collection[j]){
      temp++;
    }else if(str === collection[j].charAt(0)){
      if(collection[j].charAt(collection[j].length - 1) === ']'){
        temp = temp + (collection[j].substring(2,collection[j].indexOf("]")) - 0);
      }else{
        temp = temp + (collection[j].charAt(2) - 0);
      }
    }
  }
  return temp;
}


function count_same_elements(collection) {
  var array = []; var element = findElement(collection);
  for(var i = 0; i < element.length; i++ ){
    var temp = 0;
    array.push({name:element[i], summary: countElement(collection,element[i],temp)});
  }
  return array;
}
