function count_same_elements(collection) {
  var temp = 1;
  var array = [];
  for(var i = 0; i < collection.length; i++){
     if(collection[i] === collection[i+1]){
         temp++;
     }else{
       var tempObj = {key:collection[i],count:temp};
       array.push(tempObj);
       temp = 1;
     }
  }
  return array;
}
