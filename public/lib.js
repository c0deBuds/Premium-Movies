const Lib = {
    renderCollection: function (collection, template, target){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          let rec = collection[i];
          html+= template(rec);
        }
  
        result.innerHTML = html;
    },

    renderItem : function (item, template, target){
      document.querySelector(target).innerHTML = template(item)
    },

    getData: async function (url){
      const response = await fetch(url);
      return response.json();
    }
};