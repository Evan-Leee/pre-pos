function count_same_elements(collection) {
    var temp = 1;var array = [];  var tempObj;
    for(var i = 0; i < collection.length; i++){
      if(collection[i] === collection[i+1]){
        temp++;
      }else{
        if(temp == 1 && collection[i].length > 1){
           tempObj = {key:collection[i].charAt(0),count:collection[i].charAt(2) - 0};
        }else{
         tempObj = {key:collection[i],count:temp};
        }
        array.push(tempObj);
        temp = 1;
      }
    }
    return array;
  }


