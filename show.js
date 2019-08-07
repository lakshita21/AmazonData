var fs=require('fs');
var contents=fs.readFile('tops_fashion.json','utf8',function(err, contents) {
    obj=JSON.parse(contents);
    var result =obj.reduce( (acc, o) => (acc[o.title] = (acc[o.title] || 0)+1, acc), {} );
       console.log(result);

});
