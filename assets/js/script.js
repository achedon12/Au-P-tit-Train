/* definitions des variables */
let user = sessionStorage.getItem("user");
let connexion = sessionStorage.getItem("connexion");
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
            document.getElementById("search"),

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
                    sessionStorage.setItem("id",element.id);
                    sessionStorage.setItem("connexion",true);
                    window.location.replace("index.html");
                    alert("Connexion réussie");
                    break;
                }
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
    sessionStorage.removeItem("trajets");
    sessionStorage.removeItem("user");
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
    let gareDepartID;
    let gareArriveeID;
    /* Premier fetch */
    fetch("http://gigondas:1111/sprietna/ihm/tp4/stations")
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw response;
        }
    })
    .then(gare => {
        if(gareDepart != "" && dateDepart != "" && HourDepart != "" && gareArrivee != ""){
            for(element of gare){
                if(element.name == gareDepart){
                    gareDepartID = element.id;
                }
                if(element.name == gareArrivee){
                    gareArriveeID = element.id  ;
                }
            }
            /* Second fetch */
            fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=' + gareDepartID + '&cityTo=' + gareArriveeID + '&date=' + dateDepart + '&timeFrom=' + HourDepart + ' ')
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw response;
                }
            })
            .then(billet => {
                let AllBillets = document.querySelector("section.allBilletsSearch");
                if(billet.lenght == 0){
                    let h2 = document.createElement("h2");
                    h2.textContent = "Aucun billet n'est disponible pour votre trajet"
                    AllBillets.insertBefore(h2,document.querySelector("section.allBilletsSearch section.newBillets"));
                }else{
                    for(element of billet){
                        let section = document.createElement("section");
                        section.classList.add("newBillet");   
                        let h2_1 = document.createElement("h2");
                        h2_1.textContent = element.date;
                        section.append(h2_1);              
                        let h2_2 = document.createElement("h2");
                        h2_2.textContent = element.departureTime;
                        section.append(h2_2);              
                        let h2_3 = document.createElement("h2");
                        h2_3.textContent = element.travel.from.name+" "+gareArrivee;
                        section.append(h2_3);              
                        let h2_4 = document.createElement("h2");
                        h2_4.textContent = element.price+" €";
                        section.append(h2_4);
                        let button = document.createElement("button");
                        button.classList.add("addToBasket");
                        button.id = element.id;
                        button.textContent = "Ajouter au panier";
                        button.addEventListener('click',function(){
                            if(connexion == null){
                                alert("Veuillez vous connecter avant de pouvoir ajouter de billet au panier");
                            }else{
                                sessionStorage.setItem("trajets",element.id);
                                alert("Vous avez bien ajouté le billet au panier");
                            }
                        });
                        section.append(button);
                        AllBillets.insertBefore(section,document.querySelector("section.allBilletsSearch section.newBillets"));   
                    }
                }
            })
            .catch((error) => {
                error.text.then(errorMessage => {
                    console.log("Request Failed : "+errorMessage);
                })
            })
        }else{
            alert("Veuillez compléter toutes les données pour ajouter un billet à votre panier");
        }
        tableau[12].style.display = "inherit";
        tableau[3].style.display = "none";  
    })
    .catch((error) => {
        error.text.then(errorMessage => {
            console.log('Request Failed : '+errorMessage)
        })
    })   
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
            let price = element.schedule.price;
            let surname = element.info.surname;
            let firstname = element.info.firstname;
            let mail = element.info.mail; 
            let date = element.schedule.date;
            let departureTime = element.schedule.departureTime;
            let type = element.schedule.type;
            let duration = element.schedule.travel.duration;

            let heures = Math.floor(duration/60);
            let minutes = duration - (heures * 60);

            let cityFrom = element.schedule.travel.from.city;
            let cityFromID = element.schedule.travel.from.id;
            let cityFromName = element.schedule.travel.from.name;
            let cityTo = element.schedule.travel.to.city;
            let cityToID = element.schedule.travel.to.id;
            let cityToName = element.schedule.travel.to.name;
                               
            let sectionNewBillet = document.createElement("section");
            sectionNewBillet.classList.add("newBillet");
            let h2_1 = document.createElement("h2");
            h2_1.textContent = surname+" "+firstname;
            sectionNewBillet.append(h2_1);
            let h2_2 = document.createElement("h2");
            h2_2.textContent = cityFromName+" - "+cityToName;
            sectionNewBillet.append(h2_2);
            let h2_3 = document.createElement("h2");
            h2_3.textContent = heures+" h "+minutes+" min";
            sectionNewBillet.append(h2_3);
            let h2_4 = document.createElement("h2");
            h2_4.textContent = "Départ : "+departureTime;
            sectionNewBillet.append(h2_4);
            let h2_5 = document.createElement("h2");
            h2_5.textContent = "Prix : "+price+" €";
            sectionNewBillet.append(h2_5);
            let button = document.createElement("button");
            button.classList.add("annuler");
            button.textContent = "Annuler le trajet";
            sectionNewBillet.append(button);
            let allBillets = document.querySelector("section.allBillets");
            allBillets.insertBefore(sectionNewBillet,document.querySelector("section.allBillets section.newBillets"));    
        }
    })
    .catch((error) => {
        error.text.then(errorMessage => {
            console.log('Request Failed : '+ errorMessage);
        })
    })
}
function myTrajets(){
    let AllBillets = document.querySelector("section#trajets");
    if(sessionStorage.getItem("trajets") == null){
        let h2 = document.createElement("h2");
        h2.textContent = "Aucun billet dans le panier pour le moment";
        AllBillets.insertBefore(h2,document.querySelector("section#trajets h2"));
    }else{
        fetch("http://gigondas:1111/sprietna/ihm/tp4/schedules/info/"+JSON.parse(sessionStorage.getItem("trajets"))+" ")
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw response;
            }
        })
        .then((trajet) => {
            let section = document.createElement("section");
            section.classList.add("newBillet");   
            let h2_1 = document.createElement("h2");
            h2_1.textContent = trajet.date;
            section.append(h2_1);              
            let h2_2 = document.createElement("h2");
            h2_2.textContent = trajet.departureTime;
            section.append(h2_2);              
            let h2_3 = document.createElement("h2");
            h2_3.textContent = trajet.travel.from.name+" "+trajet.travel.to.name;
            section.append(h2_3);              
            let h2_4 = document.createElement("h2");
            h2_4.textContent = trajet.price+" €";
            section.append(h2_4);
            let button = document.createElement("button");
            button.classList.add("cancelBillet");
            button.id = trajet.id;
            button.textContent = "Annuler le billet";
            button.addEventListener('click',function(){
                sessionStorage.removeItem("trajets");
                alert("Vous avez bien enlevé votre billet de votre panier");
                window.location.replace("index.html");
            })
            section.append(button)
            let AllBillets = document.querySelector("section.allTrajets");
            AllBillets.insertBefore(section,document.querySelector("section.allTrajets section.newBillets"));
        })
        .catch((error) => {
            error.text.then(errorMessage => {
                console.log("Request Failed : "+errorMessage);
            })
        })
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
document.querySelector("#trajets-2").addEventListener('click', myTrajets);


let buttonBack = document.querySelectorAll("button.back");
for(element of buttonBack){
    element.addEventListener('click', back);  
}
/* Data list for Cities */
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
