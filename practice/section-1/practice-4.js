function itemFind(collectionA,odject_b){
  for(var i = 0; i < odject_b.value.length; i++){
    if(collectionA === odject_b.value[i]){
      return collectionA;
    }
  }

}

function collect_same_elements(collection_a, object_b) {
  var array = [];
  for(var i = 0; i < collection_a.length; i++){
    var item = itemFind(collection_a[i].key,object_b);
    if(item){
      array.push(item);
    }

  }
  return array;
}
