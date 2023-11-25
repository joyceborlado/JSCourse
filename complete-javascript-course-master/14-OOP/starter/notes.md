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

set
The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

const language = {
set current(name) {
this.log.push(name);
},
log: [],
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// Expected output: Array ["EN", "FA"]

Using setters in classes
You can use the exact same syntax to define public instance setters that are available on class instances. In classes, you don't need the comma separator between methods.

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

const o = {
a: 1,
b: 2,
// **proto** sets the [[Prototype]]. It's specified here
// as another object literal.
**proto**: {
b: 3,
c: 4,
},
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

const parent = {
value: 2,
method() {
return this.value + 1;
},
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
**proto**: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, **proto**: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead

const boxPrototype = {
getValue() {
return this.value;
},
};

const boxes = [
{ value: 1, __proto__: boxPrototype },
{ value: 2, __proto__: boxPrototype },
{ value: 3, __proto__: boxPrototype },
];

//////////////////////////////////////////////////////
Linking classes example

function Employee(name, age, gender, id) {
this.name = name;
this.age = age;
this.gender = gender;
this.id = id;
};

function Developer(name, age, gender, id,  
specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;

}
console.log(Employee.prototype);
console.log(Developer.prototype);

// Output
Object
constructor: ƒ Employee(name, age, gender, id)
[[Prototype]]: Object

Object
constructor: ƒ Developer(name, age, gender, id, specialization)
[[Prototype]]: Object
