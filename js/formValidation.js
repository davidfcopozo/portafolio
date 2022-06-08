const d = document,
w = window;


export default function formValidation () {

      const $validForm = d.querySelector("form [required]");
      const validation = w.getComputedStyle($validForm, "valid")
      /* const $invalidForm = d.querySelector(".form [required]:invalid");  */


        if(validation) {
    
          d.documentElement.style.setProperty("--pseudo-purp-text", 'green');
    
        } else if (!validation) {
    
          d.documentElement.style.setProperty("--pseudo-purp-text", 'green');
    
        } else{ 
    
          root.style.setProperty("--pseudo-purp-text", '#9475af');
    
        }

      }
      d.addEventListener("keyup", formValidation)
