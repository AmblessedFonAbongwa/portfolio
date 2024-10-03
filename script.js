
function corncharf(){
var menug=document.getElementById("naviga");

if(menug.className ==="nav-links"){
    menug.classList += "responsive"
}
else{
    menug.className = "nav-links"
}
}

window.onscroll=function(){
     headershadow()
}
function headershadow(){
    const navheader=document.getElementById("nav-header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navheader.style.boxShadow="0px 1px 6px rgba(0,0,0,0.1)";
        navheader.style.height="70px";
        navheader.style.lineHeight="70px";
    }
    else{

        navheader.style.boxShadow="none";
        navheader.style.height="none";
        navheader.style.lineHeight="none";
    }
}
var typedeffect = new Typed(".typedtext",{
      strings:["Designer","Graphic Designer" ,"Developer","Web Designer"],
    loop:true,
    typeSpeed:100,
    backSpeed: 80,
    backDelay: 2000
});
    // home
  const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration: 1800,
    reset:true,
    mobile:true,
  });
sr.reveal('.featured-text-card',{}),
sr.reveal(".featured-name",{delay:100})
sr.reveal(".featured-text-info",{delay:200})
sr.reveal(".featured-btn",{delay:300})
sr.reveal(".social-icons",{delay:400})
sr.reveal(".featured-images",{delay:300})
sr.reveal(".featured-info",{delay:250})
sr.reveal(".body",{delay:250})

// project


  const sleft = ScrollReveal({
    origin : 'left',
    distance : '80px',
    duration: 1800,
    reset:true,
    mobile :true
  });
sr.reveal('.scrollman',{}),
sleft.reveal(".about-info",{delay:100})
sleft.reveal(".skils-header",{delay:80})


// about
  const sight = ScrollReveal({
    origin : 'right',
    distance : '80px',
    duration: 1800,
    reset:true,
    mobile:true
  });
sight.reveal(".skills-list",{delay:100});
sr.reveal('.top-header',{}),
sr.reveal(".project-container",{delay:200})
sr.reveal(".project-box",{delay:250});
sr.reveal(".skillgone",{delay:300});

// contact
sr.reveal('.top-header',{}),
sr.reveal(".col",{delay:200})
sr.reveal(".contact-info",{delay: 400})
sr.reveal(".form-control",{delay:700})
sr.reveal(".top-footer",{delay:700})
sr.reveal(".middle-footer",{delay:700})
sr.reveal(".footer-menu",{delay:700})
sr.reveal(".footer-social",{delay:700})
sr.reveal(".botom-footer",{delay:700})

let calm=document.getElementById("calm");
let counter=0

setInterval(() =>{
 if(counter == 90){
     clearInterval()
 } else{
       counter += 1 }
calm.innerHTML=counter + "%"},20);

let number1=document.getElementById("number1");
let counter1=0

setInterval(() =>{
 if(counter1 == 85){
     clearInterval()
 } else{
       counter1 += 1 }
number1.innerHTML=counter1 + "%"},24);



let number2=document.getElementById("number2");
let counter2=0

setInterval(() =>{
 if(counter2 == 90){
     clearInterval()
 } else{
       counter2 += 1 }
number2.innerHTML=counter2 + "%"},20);


let number3=document.getElementById("number3");
let counter3=0

setInterval(() =>{
 if(counter3 == 87){
     clearInterval()
 } else{
       counter3 += 1 }
number3.innerHTML=counter3 + "%"},23);

