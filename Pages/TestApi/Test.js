
const axios = require("axios");

const url="https://api.calorieninjas.com/v1/nutrition?query=";
const cache={};
const query="200g chicken sandwich";


async function testAPI(query){
    try{
        
        if(cache[query]){
            console.log("From Cache : ");
            console.log(cache[query]);
            return;
        }
        const res=await axios.get(url+query,{
            headers:{
                "X-Api-Key" : "cVcORDzD3cL0RBjlZqkQMw==FRF7eQBvDEmMAzxI"
            }
        });
        cache[query]=res.data;
        console.log("from API : ",res.data);
    }

    catch(err){
        console.log(err);
    }
}

async function testRun(){
    await testAPI(query);
    await testAPI(query);
}

testRun();