function itemFind(item, collection_b ){
  for(var j = 0; j < collection_b.length; j ++){
    if(item === collection_b[j]){
      return item;
    }
  }
}

function collect_same_elements(collection_a, collection_b) {

  var array = [];
  for(var i = 0; i < collection_a.length; i ++){
    var item =itemFind(collection_a[i],collection_b);

    if(item){
      array.push(item);
    }

  }
  return array;
}
