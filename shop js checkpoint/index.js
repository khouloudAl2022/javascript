const addtocart=document.getElementsByClassName("add");
const qtes=document.querySelectorAll(".qte");
const moins=document.getElementsByClassName("remove");
const rubbish=document.querySelectorAll(".rubbish");
const rem=document.querySelectorAll(".col");
const prix=document.getElementsByClassName("prix");
// console.log(addtocart);


// function add product to the cart *********************
for(let i=0; i<addtocart.length ; i++){
    addtocart[i].addEventListener("click", function () {
   
     qtes[i].innerHTML++;
        
      total();
   
    });
}

// function ------------ 

for(let i=0 ; i<moins.length ;i++){
    moins[i].addEventListener("click", function(){
        if (qtes[i].innerHTML > 0) {
    qtes[i].innerHTML--;
}
    });
}

for(let i=0;i<rubbish.length;i++){
    rubbish[i].addEventListener("click",function(){
 rubbish[i]=rem[i].remove();
    });
}

    function total(){
    const prix=document.querySelectorAll(".prix");
    const t=document.getElementById("tot");
    const qtes=document.querySelectorAll(".qte");
    let s=0;
for(let i=0 ; i<prix.length;i++){
    
     
       s=s+qtes[i].innerHTML * prix[i].innerHTML;
    }t.innerHTML=s;
    }