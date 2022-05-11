export class User {
    #idUser
    #passwordUser
    #statusConection
    
    constructor(emailAddressUser , addressUser , phoneUser , residentUser , nameUser , lastNameUser , genderUser){
        this.emailAddressUser = emailAddressUser;
        this.addressUser = addressUser;
        this.phoneUser = phoneUser;
        this.residentUser = residentUser; 
        this.nameUser = nameUser;
        this.lastNameUser = lastNameUser;
        this.genderUser = genderUser;
    }

    _asignarClave(password){
        this.#passwordUser = password;
    }
};