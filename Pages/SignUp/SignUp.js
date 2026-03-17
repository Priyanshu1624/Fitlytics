const form=document.querySelector(".signupform");

form.addEventListener("submit",function(e){


    e.preventDefault();

    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmpassword=document.querySelector("#confirmpassword").value;
    const fullname=document.querySelector("#fullname").value;

    if(password!=confirmpassword){
        alert("Passwords do not match");
        document.querySelector("#confirmpassword").value="";
        document.querySelector("#password").value="";
        return;
    }

    console.log("Full Name : ",fullname);
    console.log("Email : ", email);
    console.log("Password : ",password);
    console.log("Confirmed Password : ", confirmpassword);
    alert("Sign Up submitted")

    
    
})