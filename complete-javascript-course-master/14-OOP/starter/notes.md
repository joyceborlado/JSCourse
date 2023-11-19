//////////// LECTURE ///////////////
FOUR FUNDAMENTAL OOP PRINCIPLES

1.  ABSTRACTION

Phone {
charge
volume

    homeBtn() {}
    volumeBtn() {}
    screen() {}

}

hiding details that don't matter

2.  ENCAPSULATION
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

3.  Inheritance - making all propertiles and methods of a certain class available to a child class

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

4.  Polymorphism - a child class can overwrite a method it inherited from a parent class

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

///////////// Getters and setters ES6 classes ////////

get
The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

const obj = {
log: ['a', 'b', 'c'],
get latest() {
return this.log[this.log.length - 1];
},
};

console.log(obj.latest);
// Expected output: "c"

Using getters in classes
You can use the exact same syntax to define public instance getters that are available on class instances. In classes, you don't need the comma separator between methods.

class ClassWithGetSet {
#msg = "hello world";
get msg() {
return this.#msg;
}
set msg(x) {
this.#msg = `hello ${x}`;
}
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
