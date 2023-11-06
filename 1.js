let a = 123
let b = 'text'
let c = [1, 2, 3]

let a1 = JSON.stringify(a)
let b1 = JSON.stringify(b)
let c1 = JSON.stringify(c)

console.log(a1, typeof a1)
console.log(b1, typeof b1)
console.log(c1, typeof c1)

let student = {
    name: 'Alex',
    age: 18,
    curs: ['python', 'js', 'html'],
    type: undefined,
}


let s1 = JSON.stringify(student, null, 5)
console.log(s1)

let s2 = JSON.stringify(student, ['name', 'age'], 5)
console.log(s2)

let s3 = JSON.stringify(student, f1, 5)
console.log(s3)

function f1(key, value){
    if (key === 'age' && value < 20){
         return 54
    }
    if (key === 'type' && value === undefined){
        return 'none'
    }
    return value
}





let stroka = '{"name":"Vova", "age":12}'
let newobj = JSON.parse(stroka, f2)
console.log(newobj)
console.log(newobj.name)
console.log(newobj.age)

function f2(key, value){
    if (key === 'age' && value < 20){
        return 'школьник'
    }
    return value
}