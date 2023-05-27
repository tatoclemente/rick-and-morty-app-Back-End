const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,9})\S$/i;

export default function validate(userData) {
    const errors = {}
  
     if (!regexEmail.test(userData.email)) {
        errors.email = 'Debe ser un correo electrónico';
     }
     if(!userData.email) {
        errors.email = 'Este campo no puede estar vacío'
     }

     if(userData.email.length > 35){
      errors.email = 'El correo deb e tener menos de 35  caracteres'
     }
     if (!regexPassword.test(userData.password)) {
        errors.password = 'Debe tener entre 6 y 10 caracteres, al menos un numero y una mayuscula';
     }
     if(!userData.password){
        errors.password = 'Este campo no puede estar vacío'
     }
     if (!regexPassword.test(userData.password_validate)) {
      errors.password_validate = 'Debe tener entre 6 y 10 caracteres, al menos un numero y una mayuscula';
   }
   if(!userData.password_validate){
      errors.password_validate = 'Este campo no puede estar vacío'
   }
   if(userData.password_validate !== userData.password){
      errors.password_validate = 'La contraseña debe coincidir'
   }
  
     return errors
  }