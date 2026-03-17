const form=document.querySelector(".loginform");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    console.log("Email : ", email);
    console.log("Password : ",password);
    alert("Login request sent (backend will be added later)");
});