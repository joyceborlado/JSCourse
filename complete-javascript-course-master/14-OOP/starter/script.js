'use strict';

//////////// LECTURE ///////////////
/* FOUR FUNDAMENTAL OOP PRINCIPLES
 1. ABSTRACTION

Phone {
    charge
    volume

    homeBtn() {}
    volumeBtn() {}
    screen() {}
}

hiding details that don't matter


2. ENCAPSULATION
    -keeping properties and methods private inside the class so they are not accessible outside the class

    Hypothetical code:

    User {
        user
        private password
        private email

        login(word) {
            this.password === word
        }

        comment(text) {
            this.checkSPAM(text)
        }

        private checkSPAM(text) {
             //Verify logic
        }
    }

3. Inheritance - making all propertiles and methods of a certain class available to a child class

    Parent class
    User {
        user
        password
        email

        login(password){
            //log in logic
        }
        sendMessage(str) {
            //sending logic
        }
    } 

    Child class
    Admin {
        user
        password
        email
        permissions

        login(password){
            //log in logic
        }
        sendMessage(str) {
            //sending logic
        }

        deleteUser(user) {
            //deleting logic
        }
    }

4. Polymorphism - a child class can overwrite a method it inherited from a parent class 

Admin {
    user
    password
    email
    permissions

    login(password){
        //different login
    }
    
    deleteUser(user) {
        //deleting logic
    }

}

User {
        user
        password
        email

        login(password){
            //log in logic
        }
        sendMessage(str) {
            //sending logic
        }
    } 

Author {
    user
    password
    email
    posts


    login(password){
        // more different
    }

    writePost(){
        //writing logic
    }
}



 
*/
