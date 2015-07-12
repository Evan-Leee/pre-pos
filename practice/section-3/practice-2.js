function compareReasult(str,object_b){
  for(var i = 0; i < object_b.value.length; i++){
    if(str.key === object_b.value[i] && str.count >= 3){
      str.count = str.count - Math.floor(str.count/3);
    }
  }
  return  {key:str.key,count:str.count};
}


function create_updated_collection(collection_a, object_b) {
  var array = [];
  for(var i = 0; i < collection_a.length; i++){
    array.push(compareReasult(collection_a[i],object_b)) ;
  }
  return array;
}
