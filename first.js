var fs=require('fs');
var contents=fs.readFile('tops_fashion.json','utf8',function(err, contents) {
    obj=JSON.parse(contents);
    
   var counts=0;
   var counta=0;
   var countsa=0;
   var countb=0;
for(var i = 0; i < obj.length; i++)
{
  if(obj[i].sku)
  {
      counts++;
  }
  if(obj[i].asin)
{
    counta++;
}
if(obj[i].asin||obj[i].sku)
{
    countsa++;
}
if(obj[i].asin&&obj[i].sku)
{
    countb++;
}
}
console.log("TASK 1.........")
console.log("Total objects are:"+obj.length)
console.log("Count of Sku: "+counts)

console.log("Count of Asin: "+counta)

console.log("Count of Asin or Sku: "+countsa)
console.log("Count of Asin and Sku: "+countb)
var r='';
 var result =obj.reduce( (acc, o) => (acc[o.sku] = (acc[o.sku] || 0)+1, acc), {} );
for(var x in result){
      delete result.null;
     }
for(var x in result){
        if(result[x]!=1)
       r=false;
        else
        r=true;
         }
   console.log("Unique Sku :"+r);

   var result1 =obj.reduce( (acc, o) => (acc[o.asin] = (acc[o.asin] || 0)+1, acc), {} );
   for(var x in result1){
           if(result1[x]!=1)
          r=false;
           else
           r=true;
            }
      console.log("Unique Asin :"+r);
      obj.forEach(el => {
        Object.keys(el).forEach(key => {
          if (el[key] === null) {
            delete el[key];
          }
        });
        });
      for(var i=0;i<obj.length;i++){
        var key=Object.keys(obj[i]);
   }
   console.log("Values present in all :");
for(var j=0;j<key.length;j++){
console.log(key[j])}


});
