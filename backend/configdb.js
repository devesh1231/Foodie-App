const mongoose=require('mongoose');
const dburl='mongodb+srv://foodieApp:Physics5@cluster0.euqpbfq.mongodb.net/foodieAppmern?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser: true});
const conn=mongoose.connection;
conn.on('connected', async function() {
    console.log('WellDone!! DataBase is connected successfully');
    let data= await conn.db.collection("fooData2").find({}).toArray();
    let catagory= await conn.db.collection("FoodCatagory").find({}).toArray();
    global.food_items=data;
    global.food_catagory=catagory;
    
    
    
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;