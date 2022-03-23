/* definitions des variables */
let cgu2 = document.getElementById("cgu-2");
let cgu = document.getElementById("cgu");
let cgv2 = document.getElementById("cgv-2");
let cgv = document.getElementById("cgv");
let mentionsLegals2 = document.getElementById("mentionsLegals-2");
let mentionsLegals = document.getElementById("mentionsLegals");
let form = document.getElementById("form");
let suivis2 = document.getElementById("suivis-2");
let suivis = document.getElementById("suivis");
let faq2 = document.getElementById("faq-2");
let faq = document.getElementById("faq");
let header = document.getElementById("header");
let header2 = document.getElementById("header-2");

/* Events */
cgu2.addEventListener("click",function(){
    if(form.style.display !== "none"){
       form.style.display = "none";
    }
    if(cgv.style.display !== "none"){
        cgv.style.display = "none";
    }
    if(mentionsLegals.style.display !== "none"){
        mentionsLegals.style.display = "none";
    }
    if(faq.style.display !== "none"){
        faq.style.display = "none";
    }
    if(suivis.style.display !== "none"){
        suivis.style.display = "none";
    }
    cgu.style.display = "inherit";
    cgu.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
cgv2.addEventListener("click",function(){
    if(form.style.display !== "none"){
        form.style.display = "none";
    }
     if(cgu.style.display !== "none"){
         cgu.style.display = "none";
    }
     if(mentionsLegals.style.display !== "none"){
         mentionsLegals.style.display = "none";
    }
     if(faq.style.display !== "none"){
        faq.style.display = "none";
    }
    if(suivis.style.display !== "none"){
        suivis.style.display = "none";
    }
    cgv.style.display = "inherit";
    cgv.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
mentionsLegals2.addEventListener("click",function(){
    if(form.style.display !== "none"){
        form.style.display = "none";
    }
     if(cgu.style.display !== "none"){
         cgu.style.display = "none";
    }
     if(cgv.style.display !== "none"){
        cgv.style.display = "none";
    }
    if(faq.style.display !== "none"){
        faq.style.display = "none";
    }
    if(suivis.style.display !== "none"){
        suivis.style.display = "none";
    }
    mentionsLegals.style.display = "inherit";
    mentionsLegals.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
faq2.addEventListener("click",function(){
    if(form.style.display !== "none"){
        form.style.display = "none";
    }
     if(cgu.style.display !== "none"){
         cgu.style.display = "none";
    }
     if(cgv.style.display !== "none"){
        cgv.style.display = "none";
    }
    if(mentionsLegals.style.display !== "none"){
        mentionsLegals.style.display = "none";
    }
    if(suivis.style.display !== "none"){
        suivis.style.display = "none";
    }
    faq.style.display = "inherit";
    faq.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
suivis2.addEventListener("click",function(){
    if(form.style.display !== "none"){
        form.style.display = "none";
    }
     if(cgu.style.display !== "none"){
         cgu.style.display = "none";
    }
     if(cgv.style.display !== "none"){
        cgv.style.display = "none";
    }
    if(mentionsLegals.style.display !== "none"){
        mentionsLegals.style.display = "none";
    }
    if(faq.style.display !== "none"){
        faq.style.display = "none";
    }
    suivis.style.display = "inherit";
    suivis.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
header2.addEventListener("click",function(){
    if(cgu.style.display !== "none"){
        cgu.style.display = "none";
    }
    if(cgv.style.display !== "none"){
        cgv.style.display = "none";
    }
    if(mentionsLegals.style.display !== "none"){
        mentionsLegals.style.display = "none";
    }
    if(faq.style.display !== "none"){
        faq.style.display = "none";
    }
    if(suivis.style.display !== "none"){
        suivis.style.display = "none";
    }
    form.style.display = "inherit";
    header.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});