window.addEventListener('load',function(){
    console.log("your doc is loaded")
    let para=document.querySelector("p")
    para.addEventListener('click',()=>){
        para.style.color="green"
    }
})