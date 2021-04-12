/*const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggle(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details');
  const image = event.currentTarget.querySelector('img');
  const text = event.currentTarget.querySelector('span');
  
  isVisible = !isVisible;
  if (isVisible) {
    details.classList.remove('hidden');
    image.src = DOWN_ARROW;
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    image.src = RIGHT_ARROW;
    text.textContent = 'Mostra dettagli';
  }
}
let isVisible = false;

const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggle);*/


const a = document.querySelector('#lista');
 for(let i=0;i<contents.length;i++){
          let t= contents[i].titolo;
          let c=contents[i].icona;
          let m= contents[i].immagine;
          let d=contents[i].descrizione;

       

          const contenitore= document.createElement("div");
          contenitore.classList.add("box");



          const intestazione = document.createElement("div");
          intestazione.classList.add("intestazione");


 
          const tit= document.createElement("h4");
          tit.textContent=t;

          const ic= document.createElement("img");
          ic.src=c;
          ic.classList.add("icona");


          const mm=document.createElement("img");
          mm.src=m;


          mm.classList.add("immagine");

          
          const dettagli = document.createElement('div');
          dettagli.classList.add('details');

          const pulsante = document.createElement('div');
          pulsante.textContent="Mostra dettagli";

          const des= document.createElement("span");
          des.textContent=d;

          des.classList.add("hidden"); //nasconde la descrizione
       
          a.appendChild(contenitore);
          contenitore.appendChild(intestazione);
          intestazione.appendChild(tit);
          intestazione.appendChild(ic);
          contenitore.appendChild(mm);
          contenitore.appendChild(dettagli);
          contenitore.appendChild(pulsante);
          contenitore.appendChild(des);

          contenitore.addEventListener('click', mostraDettagli);

        }

        function cerca(event){

          var select= document.querySelectorAll(".box");
          var titoli= document.querySelectorAll("h4");

          
          for(let i=0; i<titoli.length;i++){
            select[i].classList.remove("hidden");

          }
          
          for(let k=0; k<select.length;k++){

             let testo1=titoli[k].textContent.toLowerCase();
             let testo2=event.target.value.toLowerCase();

             let contatore=0;

             if(testo1.includes(testo2)){
               contatore++;
             }
              if(contatore==0){
                  select[k].classList.add("hidden");

              }
          }

        }
            

                 
        const b= document.querySelector("input");
        b.addEventListener("input", cerca);



       function addPref(event){
        const imm = event.currentTarget.parentNode.parentNode.querySelector(".immagine"); // immagine di quello che ho cliccato
        const tit= event.currentTarget.parentNode.querySelector("h4"); // scritta di di quello che ho cliccato
        
        const pf= document.querySelector(".preferiti");
        pf.classList.remove("hidden");

            let a=0;
         for(let i=0; i<array.length;i++){
                 if(array[i]== tit.textContent){
                   a++;
                 }


         }



         if(a==0){

         

         const contenitore2 = document.createElement("div"); //creo il contenitore
         const immagine2= document.createElement("img");
         const immagine3= document.createElement("img");
         
         immagine2.src=imm.src; // Salvo l'immagine che ho preso nel nuovo elemento che ho creato
         immagine3.src='img/remove.png';
         immagine3.classList.add("icona");

         const intestazione2 = document.createElement("div");


         const titolo2= document.createElement("h4");
         titolo2.textContent=tit.textContent;
          pf.appendChild(contenitore2); 
          
          contenitore2.appendChild(intestazione2);
          intestazione2.appendChild(titolo2);
          intestazione2.appendChild(immagine3);
           //inserisco il testo nel contenitore che ho creato       
          contenitore2.appendChild(immagine2);
          
          immagine3.addEventListener("click", rimPref);
          
         array.push(tit.textContent);

        
         

       }

      }

      function rimPref(event){

        const testo=event.currentTarget.parentNode.querySelector("h4");
        
        for(let i=0;i<array.length;i++){
           if(array[i]== testo.textContent){
             array.splice(i,1);
           }

        }
        const cliccato= event.currentTarget.parentNode.parentNode.remove();
         
      }

       let array=[];
    
        const prefer= document.querySelectorAll(".icona");

        for(preferito of prefer){
          
        preferito.addEventListener("click", addPref);

        }


        
        //mostra dettagli

        function mostraDettagli(event){

          flag = event.currentTarget.querySelector('.hidden');
          
          if(flag){
                   event.currentTarget.querySelector('h4').classList.remove('hidden');
                   event.currentTarget.querySelector('div').textContent="Nascondi dettagli";
          }
          else{
                   event.currentTarget.querySelector('h4').classList.add('hidden');
                   event.currentTarget.querySelector('div').textContent="Mostra dettagli";
          }
   }