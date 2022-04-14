/* definitions des variables */
let user = sessionStorage.getItem("user");
let connexion = sessionStorage.getItem("connexion");
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
    let data = [];
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
                    sessionStorage.setItem("connexion",true);
                    console.log("Vous etes maintenant connecté sur le compte n°"+element.id);
                    window.location.replace("index.html");
                    break;
                }else{
                    alert("Le mot de passe est incorrect ou l'utilisateur n'existe pas");
                    break;
                }
            }
            for(lol of data){
                console.log(lol);
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
    console.log("etst");
    window.location.replace("index.html");
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
            img.src = "https://intranet.iut-valence.fr//img/PhotosEtudiants/gellyv.jpg";
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
    console.log("etz");
    let titleWithModif = document.createElement("h1");
    titleWithModif.textContent = "Au Grand V";
    titleWithModif.classList.add("underline");
    titleWithModif.classList.add("bold");
    let title = document.querySelector(".left");
    title.removeChild(document.querySelector("#title"));
    title.appendChild(titleWithModif);
}