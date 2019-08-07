var mongoose=require('mongoose')
var random=require('random')
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/Fashion',{useNewUrlParser : true});
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    
var fashionSchema=new mongoose.Schema({
    sku:{
        type:String,
        default:null,
    },
    asin:{
        type:String,
        unique:true,
        required:true,
    },
    product_type_name:{
        type:String,
        required:true,
    },
    formatted_price:{
        type:String,
        default:null,
    },
    author: {
        type:String,
        default:null,
    },
    color:{
        type:String,
        default:null,
    },
    brand:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        default:null,
    },
    availability:{
        type:String,
        default:null,
    },
    large_image_url:{
        type:String,
        required:true,

    },
    manufacturer:{
        type:String,
        default:null,
    },
    availability_type:{
        type:String,
        default:null,
    },
    small_image_url:{
        type:String,
        required:true,
    },
    editorial_review:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        default:null,
    },
    medium_image_url:{
        type:String,
        required:true, 
    },
    reviews:[{
        rdata:{
            type:Boolean,
            required:true,
            default:false,
        },
        rlink:{
            type:String,
            required:true,
        }
    }],

    date_created:{
      type:Date,
      default:Date.now,
    },

price:{
    type:Number,
    default : function() {
        return random.int(1,10000)
      }
}
})

var top_fashion=mongoose.model('top_fashion', fashionSchema,'dresses');
var fs=require('fs');
var contents=fs.readFile('tops_fashion.json','utf8',function(err, contents) {
    obj=JSON.parse(contents);
   for(var i=0;i<obj.length;i++){
        var fashion1 = new top_fashion({
                 sku:obj[i].sku,
                 title:obj[i].title,
                 asin:obj[i].asin,
                 product_type_name:obj[i].product_type_name,
                 formatted_price:obj[i].formatted_price,
                 manufacturer:obj[i].manufacturer,
                 brand:obj[i].brand,
                 color:obj[i].color,
                 editorial_review:obj[i].editorial_review,
                // reviews:obj[i].reviews,
                 author:obj[i].author,
                 publisher:obj[i].publisher,
                 availability:obj[i].availability,
                 availability_type:obj[i].availability_type,
                 model:obj[i].model,
                 small_image_url:obj[i].small_image_url,
                 large_image_url:obj[i].large_image_url,
                 medium_image_url:obj[i].medium_image_url
                 
             });
             fashion1.save(function(){
                // console.log("Saved data");
             })
               }
    /*function task2(){        
   for(var i=0;i<obj.length;i++){
        if(obj[i].sku){
    var fashion = new top_fashion({
             sku:obj[i].sku,
         });}
         else
         var fashion = new top_fashion({
            asin:obj[i].asin,
             })
console.log("Sku :" + " "+ fashion.sku+"   "+"Asin :"+" "+fashion.asin);
        }}
        task2();*/

    function task4()
    {   const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Please enter the price range-  Min  : ', (range1) => {
        rl.question('Max ', (range2) => {
            
            top_fashion.find({price:{$gte :range1,$lte:range2}},function (err, docs) {
               console.log(docs)
              })
           
            rl.close();
        });
})}
    task4();
        
})})