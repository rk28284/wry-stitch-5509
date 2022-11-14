 // singup js
 let arr_data = JSON.parse(localStorage.getItem("arrival")) || [];
 //    let obj={};
     
     document.querySelector("#signup").addEventListener("click",logData);
 
     function logData() {
         // console.log("rakesh")
         let firstname = document.querySelector("#first").value;
         console.log(firstname);
         let lastname = document.querySelector("#last").value;
         let email = document.querySelector("#email").value;
         let passward = document.querySelector("#pass").value;
         let confirmpassward = document.querySelector("#cpass").value;
         if (passward!=confirmpassward) {
             alert("PLease enter correct passward")
         } else {
            let obj={
             firstname,
             lastname,
             email,
              passward,
             confirmpassward
                 
             }
             arr_data.push(obj);
             localStorage.setItem("arrival", JSON.stringify(arr_data));
             alert("Successfully Signup");
 
         }
     }
 
     // login start here
     document.querySelector("form").addEventListener("submit",loginPart);
     function loginPart(event){
     event.preventDefault();
     let logemail=document.querySelector("#email").value;
     let logpassword=document.querySelector("#pass").value;
 
     let Data=JSON.parse(localStorage.getItem("arrival"))||[];
     let flag="no";
     for(let i=0;i<Data.length;i++){
         if(Data[i].email==logemail&&Data[i].passward==logpassword){
             flag="yes";
             break;
         }
     }
     if(flag=="yes"){
         alert("Logged Successful")
     }else{
         alert("Invaild Credentials")
     }
     }
 
     document.querySelector("#womenclick").addEventListener("click",function(){
    window.location.href="women.html";
 
    document.querySelector("#arrivalclick").addEventListener("click",function(){
    window.location.href="arrival.html";
 })
 })