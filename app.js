let count = 0;

let nbr = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) =>{
    item.addEventListener('click', (e) => { 
        btnVerif(e);     
         nbr.textContent = count;
         colorNbr(count);
    });
});

let colorNbr = (elem) => {
    if (elem>0) {
        nbr.style.color = "green";
    } else if (elem<0) {
        nbr.style.color = "red";
    } else {
        nbr.style.color = "black";
    }
};

let btnVerif = (el) => {
const styles = el.currentTarget.classList;
if (styles.contains("decrease")) {
    count --;
   }
   else if (styles.contains("increase")) {
      count ++;
   }
    else {
    count = 0;
   }
};