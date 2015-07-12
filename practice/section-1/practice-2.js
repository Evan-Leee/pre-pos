
   function itemFindDeep(collection_a,x,collection_b,y){
     for (var z = 0; z < collection_b[y].length; z++) {
       if(collection_a[x] === collection_b[y][z]){
         return collection_a[x];
       }
     }
   }

   function itemFind(collection_a,x,collection_b){
     for(var y = 0; y < collection_b.length; y++){

       if(itemFindDeep(collection_a,x,collection_b,y)){
         return itemFindDeep(collection_a,x,collection_b,y);
       }
     }



   }

  function collect_same_elements(collection_a, collection_b) {
    var array = [];
    for (var x = 0; x < collection_a.length; x++) {
      var item = itemFind(collection_a,x,collection_b) ;
      if(item){
        array.push(item);
      }
    }
    return array;
  }
