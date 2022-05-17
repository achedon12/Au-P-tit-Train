/* definitions des variables */
let user = sessionStorage.getItem("user");
let connexion = sessionStorage.getItem("connexion");
let email = sessionStorage.getItem("email");
let id = sessionStorage.getItem("id");
let cgu2 = document.getElementById("cgu-2");
let cgv2 = document.getElementById("cgv-2");
let notifications2 = document.getElementById("notifications-2");
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
            document.getElementById("notifications"), 
            document.getElementById("account-deconnexion"),

];
/* functions */
function doNotShow(){
    for(element of tableau){
        element.style.display = "none";
    }
}
function connect(event){
    event.preventDefault();
    event.stopPropagation();
    fetch('http://gigondas:1111/sprietna/ihm/tp4/users')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
           throw response;
        }
    })
    .then(user => {
        let mail = document.getElementById("mailConnection").value;
        let mdp = document.getElementById("passwordConnection").value;
        if(mail != "" && mdp != ""){
            if(mail == "le V"){
                sessionStorage.setItem("user","le V");
                sessionStorage.setItem("connexion",true);
                window.location.replace("index.html");
                return;
            }
            for(element of user){
                if(element.mail == mail){
                    sessionStorage.setItem("user",element.surname);
                    sessionStorage.setItem("email",element.mail);
                    sessionStorage.setItem("id",element.id);
                    sessionStorage.setItem("connexion",true);
                    console.log("Vous etes maintenant connecté sur le compte n°"+element.id);
                    window.location.replace("index.html");
                    break;
                }
            }
            if(connexion == null){
                alert("L'identifiant n'existe pas");
            }
            
        }else{
            alert("Veuillez préciser un mail et un mot de passe valide")
        }
    })
    .catch((error) => {
        error.text().then((errorMessage) => {
            console.log('Request Failed : ' + errorMessage);
        });
    });
}
function deconnect(event){
    event.preventDefault();
    event.stopPropagation();
    sessionStorage.clear();
    window.location.replace("index.html");
}
function audio(event){
    event.preventDefault();
    event.stopPropagation();
    if(document.getElementById("shearch").value == "le V"){
        let audio = document.createElement("audio");
        if(audio.canPlayType("audio/mpeg")){
            audio.setAttribute("src","assets/audio/note.mp3");
        }
    audio.play();
    }
}
function back(){
    window.location.replace("index.html");
}
function formToBillet(event){
    event.preventDefault();
    event.stopPropagation();
    let gareDepart = document.getElementById("stationStart").value;
    let dateDepart = document.getElementById("stationStartDate").value;
    let HourDepart = document.getElementById("StationStartHour").value;
    
    let gareArrivee = document.getElementById("stationEnd").value;
    let dateArrivee = document.getElementById("StationEndDate").value;
    let HourArrivee = document.getElementById("StationEndHour").value;
    let maxPrice = document.getElementById("maxPrice").value;
    let handicap = document.getElementById("handicap").value;
    let reduction = document.getElementById("reduction").value;
    if(gareDepart != "" || dateDepart != "" || HourDepart != "" || gareArrivee != "" || dateArrivee != "" || HourArrivee != "" || maxPrice != "" || handicap != "" || reduction != ""){
        fetch()
        window.location.replace("index.html");
        }else{
            alert("Veuillez compléter toutes les données pour ajouter un billet à votre panier");
        }
}
function allBillets(){
    fetch('http://gigondas:1111/sprietna/ihm/tp4/users/history/'+id)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw response;
        }
    })
    .then(billet => {
        for(element of billet){
            let surname;
            let firstname;
            let mail;
            let data;
            let departureTime;
            let type;
            let duration;
            let cityFrom;
            let cityFromID;
            let cityFromName;
            let cityTo;
            let cityToID;
            let cityToName;
            console.log(element);
            console.log("lol")
            
            surname = element.info.surname;
            firstname = element.info.firstname;
            mail = element.info.mail;
             
            date = element.schedule.date;
            departureTime = element.schedule.departureTime;
                    
            type = element.schedule.type;
                        
            duration = element.schedule.travel.duration;
                         
            cityFrom = element.schedule.travel.from.city;
            cityFromID = element.schedule.travel.from.id;
            cityFromName = element.schedule.travel.from.name;
                               
            cityTo = element.schedule.travel.to.city;
            cityToID = element.schedule.travel.to.id;
            cityToName = element.schedule.travel.to.name;
                               
            let sectionNewBillet = document.createElement("section");
            sectionNewBillet.classList.add("newBillet");
            let h2_1 = document.createElement("h2");
            h2_1.textContent = surname+" "+firstname;
            sectionNewBillet.append(h2_1);
            let h2_2 = document.createElement("h2");
            h2_2.textContent = cityFromName+" - "+cityToName;
            sectionNewBillet.append(h2_2);
            let h2_3 = document.createElement("h2");
            h2_3.textContent = departureTime;
            sectionNewBillet.append(h2_3);
            let button = document.createElement("button");
            button.classList.add("annuler");
            button.textContent = "Annuler le trajet";
            sectionNewBillet.append(button);
            let allBillets = document.querySelector("section.allBillets");
            allBillets.insertBefore(sectionNewBillet,document.querySelector("section.newBillets"));    
        }
    })
    .catch((error) => {
        error.text.then(errorMessage => {
            console.log('Request Failed :'+ errorMessage);
        })
    })
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
    tableau[6].style.display = "inherit";
    tableau[6].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
billets2.addEventListener("click",function(){
    doNotShow();
    tableau[7].style.display = "inherit";
    tableau[7].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    if(connexion == null){
        let noBillets = document.createElement("h2");
        noBillets.textContent = "Veuillez vous connecter pour avoir accès à vos billets";
        let allBillets = document.querySelector("#billets");
        allBillets.removeChild(allBillets.lastChild);
        allBillets.appendChild(noBillets);
    }else{
        allBillets();
    }

});
basket2.addEventListener("click",function(){
    doNotShow();
    tableau[8].style.display = "inherit";
    tableau[8].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
account2.addEventListener("click",function(){
    doNotShow();
    if(user != null){
        tableau[11].style.display = "inherit";
        tableau[11].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        if(user == "le V" || user == "Le V"){
            let img = document.createElement("img");
            img.src = "https://cdn.discordapp.com/attachments/898529173843353622/964404861900840960/IMG_20220331_231306.jpg";
            img.classList.add("leV");
            let doc = document.querySelector("#account-deconnexion");
            doc.append(img);
        }
    }else{
        tableau[9].style.display = "inherit";
        tableau[9].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
});
notifications2.addEventListener("click",function(){
    doNotShow();
    tableau[10].style.display = "inherit";
    tableau[10].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

document.querySelector('#connect').addEventListener('click', connect); 
document.querySelector('#deconnect').addEventListener('click', deconnect); 
document.querySelector("#shearch").addEventListener('click', audio);
document.querySelector("#submitBillet").addEventListener('click', formToBillet);
let buttonBack = document.querySelectorAll("button.back");
for(element of buttonBack){
    element.addEventListener('click', back);  
}
/* Data list for  */
let dataList = document.createElement("datalist");
let selectTravel = document.querySelector("main form section.top");
dataList.id = "stations";
fetch("http://gigondas:1111/sprietna/ihm/tp4/stations")
.then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw response
    }
})
.then((value) => {
    for(element of value){
        let option = document.createElement("option");
        option.value = element.name;
        dataList.append(option);
        selectTravel.insertBefore(dataList,document.querySelector("datalist"));
    }
})
.catch((error) => {
    error.text().then((errorMessage) => {
        console.log('Request Failed : ' + errorMessage)
    })
});

/* connexion */
if(connexion != null){
    let doc = document.createElement("p");
    doc.textContent = user;
    let name = document.querySelector("#test");
    name.removeChild(document.getElementById("name"));
    name.appendChild(doc);
}
/* Easter Egg*/
if(user == "le V" || user == "Le V"){
    let titleWithModif = document.createElement("h1");
    titleWithModif.textContent = "Au Grand V";
    titleWithModif.classList.add("underline");
    titleWithModif.classList.add("bold");
    let title = document.querySelector(".left");
    title.removeChild(document.querySelector("#title"));
    title.appendChild(titleWithModif);
}