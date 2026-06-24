let name = "dat";
let age = 20;

console.log("Ten", name);
console.log("Tuoi", age);

let a = 10;
let b = 5; 

console.log(a+b)

console.log(a-b)

function greet(name) {
    return `xin chao ${name}`;
}

console.log(greet("Dat"))


const hibro = (name) => {
    return `xin chao ${name}`;
};

console.log(hibro(name));

const person = {
    name: "Dat",
    sayHi: function() {
        setTimeout(() => {
            console.log("xin chao" + this.name);

        }, 10);
    }
};

person.sayHi();