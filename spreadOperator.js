const oldArray = [1,2,3]

const newArray = [...oldArray,4,5]
console.log(newArray)

const Person = {
    name:'Nidhi'
};

const newPerson = {
    ...Person,
    age:'Just born'
};

console.log(newPerson)
