let cartProduct=JSON.parse(localStorage.getItem("cart"));
    console.log(cartProduct);
    displayProduct(cartProduct);

    let totalcost=cartProduct.reduce((acc,el)=>acc+el.price,0);
    let new_totalcost=totalcost.toFixed(2);
    document.querySelector("#total").innerText="Total Cart Price:-"+"$"+new_totalcost
    
    
    function displayProduct(cartProduct){

      document.querySelector(".product-container").innerHTML="";
      console.log(cartProduct)
      cartProduct.forEach(element => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.setAttribute("src",element.img); 

        let title=document.createElement("h2");
        title.innerText=element.title;


        let price=document.createElement("h3");
        price.innerText="$ "+element.price

        let details=document.createElement("p");
        details.innerText=element.description

        // localStorage.setItem("cart",JSON.stringify(cartitem));
        
        div.append(img,title,details,price);

        document.querySelector(".product-container").append(div);        
      });
    }
    document.querySelector("#signupclick").addEventListener("click",function(){
    window.location.href="signup.html";
 })
 document.querySelector("#womenclick").addEventListener("click",function(){
   window.location.href="women.html";
})
document.querySelector("#arrivalclick").addEventListener("click",function(){
   window.location.href="arrival.html";
})