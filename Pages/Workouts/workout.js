const workouts=[]

const workRates={
    running: 10,
    walking: 4,
    cycling: 8,
    skipping: 12,
    yoga: 3
}

const addbtn=document.getElementById("addworkout")

addbtn.addEventListener("click", addworkout);


function addworkout(){

    const workoutName=document.getElementById("workout").value.trim().toLowerCase();
    const workoutDuration=parseInt(document.getElementById("duration").value);

    if(!workoutName || !workoutDuration){
        alert("Please Enter all fields");
        return;
    }

    const rate=workRates[workoutName] || 5;

    const calories=rate*workoutDuration;
    const displayName=workoutName.charAt(0).toUpperCase() + workoutName.slice(1);

    const workout={
        workoutName:displayName,
        workoutDuration,
        calories
    };

    workouts.push(workout);

    renderWorkout();

    document.getElementById("workout").value="";
    document.getElementById("duration").value="";
}


function renderWorkout(){
    const container=document.getElementById("workoutcontainer");
    container.innerHTML="";
    let total=0;

    workouts.forEach((w,index)=>{
        const card=document.createElement("div");
        card.classList.add("workoutcard");

        card.innerHTML=`
        <strong>${w.workoutName}</strong><br>
        ${w.workoutDuration} mins<br>
        ${w.calories} kcal
        <button class="delete">Delete</button>
        `;

        card.querySelector(".delete").addEventListener("click",()=>{
            deleteWorkout(index);
        });

        container.appendChild(card);
        total+=w.calories;

    });

    document.getElementById("totalburn").innerHTML=total + "kcal";

}


function deleteWorkout(index){
    workouts.splice(index,1);
    renderWorkout();
}

