Object-oriented programming

Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, including Java and C++. In this article, we'll provide an overview of the basic concepts of OOP. We'll describe three main concepts: classes and instances, inheritance, and encapsulation. For now, we'll describe these concepts without reference to JavaScript in particular, so all the examples are given in pseudocode.

Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

Classes and instances
When we model a problem in terms of objects in OOP, we create abstract definitions representing the types of objects we want to have in our system. For example, if we were modeling a school, we might want to have objects representing professors. Every professor has some properties in common: they all have a name and a subject that they teach. Additionally, every professor can do certain things: they can all grade a paper and they can introduce themselves to their students at the start of the year, for example.

So Professor could be a class in our system. The definition of the class lists the data and methods that every professor has.

In pseudocode, a Professor class could be written like this:

class Professor
properties
name
teaches
methods
grade(paper)
introduceSelf()

        This defines a Professor class with:

two data properties: name and teaches
two methods: grade() to grade a paper and introduceSelf() to introduce themselves.

walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

Inheritance
class Student
properties
name
year
constructor
Student(name, year)
methods
introduceSelf()

        class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
properties
teaches
constructor
Professor(name, teaches)
methods
grade(paper)
introduceSelf()

class Student : extends Person
properties
year
constructor
Student(name, year)
methods
introduceSelf()
