const meals=[];


function addMeal(){
    const foodInput=document.querySelector("#food");
    const quantityInput=document.querySelector("#quantity");

    const food=foodInput.value.trim();
    const quanity=quantityInput.value.trim();

    if(!food || !quanity){
        alert("Please enter all fields");
        return;
    }

    const meal={
        food, 
        quanity
    };

    meals.push(meal);
    rendermeals();
    foodInput.value="";
    quantityInput.value="";
}


function rendermeals(){

    

    const list=document.querySelector("#mealslist");

    list.innerHTML="";
    meals.forEach((meal,index)=>{
        const li=document.createElement("li");
        li.innerHTML= `${meal.food} - ${meal.quanity} <button class="delete" data-index="${index}">❌</button>`;
        
        const delbtn=li.querySelector(".delete");

        delbtn.addEventListener("click",()=>{
            deleteMeal(index);

        })

        
        list.appendChild(li);
    })



}

function deleteMeal(index){

    meals.splice(index, 1);
    rendermeals();
}

const addbtn=document.querySelector("#addmeals");

addbtn.addEventListener("click",addMeal);




