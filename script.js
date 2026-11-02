// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :

const formulaire=document.querySelector("#formulaire-participant");
const nom =document.querySelector("#nom");
const Ajouter=document.querySelector(".button-primary");
const Supprimer=document.querySelector(".button-delete");
const inscrit=document.querySelector(".badge-inscrit");
const presence=document.querySelector(".button-presence");
const liste=document.querySelector("#liste-participants");
const statut=document.querySelector(".legend")





function afficherparticipant(){
   formulaire.innerHTML=""

   participants.forEach((participant) => {
       
      const nomvalue=document.createElement("h3");
      nomvalue.textContent=participant.nom
      const inscritvalue=document.createElement("span");
      
      const statutvalue=document.createElement("div")
      statutvalue.textContent=participant.statut


     const buttonsupprimer=document.createElement("button");
     buttonsupprimer.type="button"
     buttonsupprimer.textContent=Supprimer

  


      liste.appendChild(nomvalue);
      liste.appendChild(statutvalue);



    
   });





}
afficherparticipant();

Ajouter.addEventListener("submit",()=>{
      


  let nouvelleparticipant={
    id : id+1,
    nom:nom.value,
    statut:inscritvalue,

  }

participants.push(nouvelleparticipant)



  if(nomvalue===""||statutvalue===""){
    alert ("remplir tous les champ")
  }

afficherparticipant();
})

























// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.
