const meals=[];
const cache={};
const API_URL="https://api.calorieninjas.com/v1/nutrition?query=";
const API_KEY="cVcORDzD3cL0RBjlZqkQMw==FRF7eQBvDEmMAzxI";




async function addMeal(){
    const foodInput=document.getElementById("food");
    const quantityInput=document.getElementById("quantity");
    const mealtime=document.getElementById("mealtime").value;

    const food=foodInput.value.trim();
    const quanity=quantityInput.value.trim();

    if(!food || !quanity){
        alert("Please enter all fields");
        return;
    }
    const query= `${food} ${quanity}`;

    const nutrition=await getCalories(query);
    const meal={
        food, 
        quanity,
        mealtime,
        calories: nutrition.calories,
        protein: nutrition.protein,
        carbs : nutrition.carbs,
        fat: nutrition.fat
    };

    meals.push(meal);
    rendermeals();
    foodInput.value="";
    quantityInput.value="";
}


function rendermeals(){

    document.getElementById("breakfastcontainer").innerHTML="";
    document.getElementById("lunchcontainer").innerHTML="";
    document.getElementById("snackcontainer").innerHTML="";
    document.getElementById("dinnercontainer").innerHTML="";


     document.getElementById("totalcalories").innerText="Total Calories : "+ 0 + " kcal";
    document.getElementById("totalprotein").innerText="Total Protein : "+ 0 + " g";
    document.getElementById("totalcarbs").innerText="Total Carbohydrates : "+ 0 + " g";
    document.getElementById("totalfats").innerText="Total Fats : "+ 0 + " g";
    document.getElementById("breakfastcalories").innerText="0";
    document.getElementById("lunchcalories").innerText="0";
    document.getElementById("snackcalories").innerText="0";
    document.getElementById("dinnercalories").innerText="0";


    let total=0;

    let b=0,l=0,s=0,d=0;
    let p=0,c=0,f=0;


    meals.forEach((meal,index)=>{
        const card=document.createElement("div");
        card.classList.add("mealcard");

        card.innerHTML=`
        <strong>${meal.food}</strong> (${meal.quanity})<br>
        🔥 ${meal.calories} kcal <br>
        Protein: ${meal.protein}g <br>
        Carbs: ${meal.carbs}g <br>
        Fat: ${meal.fat}g <br>
        <button class="delete">Delete</button>
        `;

        //delete btn
        card.querySelector(".delete").addEventListener("click",()=>{
            deleteMeal(index);
        });

        //add totals
        total+=meal.calories;
        p+=meal.protein;
        c+=meal.carbs;
        f+=meal.fat;

        if(meal.mealtime=="Breakfast"){
            document.getElementById("breakfastcontainer").appendChild(card);
            b+=meal.calories;
        }

        
        if(meal.mealtime=="Lunch"){
            document.getElementById("lunchcontainer").appendChild(card);
            l+=meal.calories;  
        }

        if(meal.mealtime=="Evening Snacks"){
            document.getElementById("snackcontainer").appendChild(card);
            s+=meal.calories;
        }

        if(meal.mealtime=="Dinner"){
            document.getElementById("dinnercontainer").appendChild(card);
            d+=meal.calories;
        }
        ;
        
        
        document.getElementById("totalcalories").innerText="Total Calories : "+ total.toFixed(1) + " kcal";
        document.getElementById("totalprotein").innerText="Total Protein : "+ p.toFixed(1) + " g";
        document.getElementById("totalcarbs").innerText="Total Carbohydrates : "+ c.toFixed(1) + " g";
        document.getElementById("totalfats").innerText="Total Fats : "+ f.toFixed(1) + " g";
        document.getElementById("breakfastcalories").innerText=b;
        document.getElementById("lunchcalories").innerText=l;
        document.getElementById("snackcalories").innerText=s;
        document.getElementById("dinnercalories").innerText=d;
        

    })



}

function deleteMeal(index){

    meals.splice(index, 1);
    rendermeals();
}

const addbtn=document.querySelector("#addmeals");

addbtn.addEventListener("click",addMeal);




//Function for API call


async function getCalories(query){
    if(cache[query]){
        console.log("From cache : ");
        return cache[query];
    }

    try{
        const res=await axios.get(API_URL+query,{
            headers: {
                "X-Api-Key": API_KEY
            }
        });

        const item=res.data.items[0];

        const nutrition={
            calories: item?.calories || 0,
            protein: item?.protein_g || 0,
            carbs: item?.carbohydrates_total_g || 0,
            fat: item?.fat_total_g || 0,
        }
        cache[query]=nutrition;
        return nutrition;
    }

    catch(err){
        console.log(err);
        return {
            calories:0,
            protein:0,
            carbs: 0,
            fat: 0
        };
    }
}
