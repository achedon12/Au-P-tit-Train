/* definitions des variables */
let cgu2 = document.getElementById("cgu-2");
let cgv2 = document.getElementById("cgv-2");
let mentionsLegals2 = document.getElementById("mentionsLegals-2");
let suivis2 = document.getElementById("suivis-2");
let faq2 = document.getElementById("faq-2");
let header2 = document.getElementById("header-2");

let billets2 = document.getElementById("billets-2");
let trajets2 = document.getElementById("trajets-2");
let basket2 = document.getElementById("basket-2");
let account2 = document.getElementById("account-2");

let tableau = [document.getElementById("cgu"),
            document.getElementById("cgv"),
            document.getElementById("mentionsLegals"),
            document.getElementById("form"),
            document.getElementById("suivis"),
            document.getElementById("faq"), 
            document.getElementById("trajets"), 
            document.getElementById("billets"), 
            document.getElementById("basket"), 
            document.getElementById("account"), 
];

/* function */
function doNotShow(){
    for(element of tableau){
        element.style.display = "none";
    }
}

/* Events */
cgu2.addEventListener("click",function(){
    doNotShow();
    tableau[0].style.display = "inherit";
    tableau[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    
});
cgv2.addEventListener("click",function(){
    doNotShow(); 
    tableau[1].style.display = "inherit";
    tableau[1].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
mentionsLegals2.addEventListener("click",function(){
    doNotShow();
    tableau[2].style.display = "inherit";
    tableau[2].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
faq2.addEventListener("click",function(){
    doNotShow();
    tableau[5].style.display = "inherit";
    tableau[5].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
suivis2.addEventListener("click",function(){
    doNotShow();
    tableau[4].style.display = "inherit";
    tableau[4].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
header2.addEventListener("click",function(){
    doNotShow();
    tableau[3].style.display = "inherit";
    document.getElementById("header").scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

trajets2.addEventListener("click",function(){
    doNotShow();
    tableau[7].style.display = "inherit";
    tableau[7].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
billets2.addEventListener("click",function(){
    doNotShow();
    tableau[7].style.display = "inherit";
    tableau[7].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
basket2.addEventListener("click",function(){
    doNotShow();
    tableau[8].style.display = "inherit";
    tableau[8].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
account2.addEventListener("click",function(){
    doNotShow();
    tableau[9].style.display = "inherit";
    tableau[9].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});