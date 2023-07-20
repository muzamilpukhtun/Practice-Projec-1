AOS.init({ duration: 1500,offset:300});
// navbar responsiveness
$(function(){
    $(".toggle").on("click",function(){
        if($(".menu").hasClass("active"))
        {
            $(".menu").removeClass("active");  
            $("this").find("a").html("<i class='fas fa-bars'></i>")
        }
        else{
            $(".menu").addClass("active");  
            $("this").find("a").html("<i class='fas fa-bars'></i>")
        }
    });
});

// counter on scroll
const number=document.querySelectorAll(".num");
const speed=100;
number.forEach(element=>{incNumber(element)});
function incNumber(elem){
    let text=+elem.innerText;
    const value=+elem.getAttribute("data-target");
    const inc=value/speed;
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(()=>{
            incNumber(elem)
        },20)
    }else{
        elem.inerText=value;
    }
}

// scroll-button
const hero=document.querySelector('.hero');
const scrolbtn=document.querySelector('.scrol-top');
const scrolltop= ()=>{
    hero.scrollIntoView({behavior:"smooth"});
}
scrolbtn.addEventListener("click",scrolltop);