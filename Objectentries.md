// --- object.entries

let theObj = {
name: "sajt",
number: 3,
right: true,
name: "ember",
age: 88,
theNumber: 88,
};

const theFunc = (paramObj) => {
for (const [key, value] of Object.entries(paramObj)) {
console.log(`${key}: ${value}`);
}
};
//theFunc(theObj);
/_ name: ember
number: 3
right: true
age: 88
theNumber: 88 _/

const theFuncX = (parammmObj) => {
let array = [];
for (const [key, value] of Object.entries(parammmObj)) {
array.push(key, value); // ha kapcsos zárojelbe rakom oket akkor objectként rakja az arrayba, ha nem akkor meg stringként és numberként
}
return array;
};

/_ console.log(theFuncX(theObj)); _/
//{} ban a key és value
/_ [
{ key: 'name', value: 'ember' },
{ key: 'number', value: 3 },
{ key: 'right', value: true },
{ key: 'age', value: 88 },
{ key: 'theNumber', value: 88 }
]
//{} nélkül a key és value
[
'name', 'ember',
'number', 3,
'right', true,
'age', 88,
'theNumber', 88
]
_/
/_ console.log(Object.entries(theObj)); _/ // ha igy consol logozom ki akkor egy nagy arrayban mindegyik objectet kis arrayba rakja, vesszoval elválasztva a key-t és a valuet

const myObj = Object.create(
{},
{
getFoo: {
value() {
return this.foo;
},
},
}
);
myObj.foo = "bar";
//console.log(Object.entries(myObj));
/_ [ [ 'foo', 'bar' ] ] _/

let random = "chair";
// console.log(Object.entries(random)); _/
/_ [
[ '0', 'c' ],
[ '1', 'h' ],
[ '2', 'a' ],
[ '3', 'i' ],
[ '4', 'r' ]
] \*/

let number = 100;
//console.log(Object.entries(number)); // Other primitives except undefined and null have no own properties
/_ [] _/

const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
console.log(`${key} ${value}`);
}
/_
a 5
b 7
c 9
_/

Object.entries(obj).forEach(([key, value]) => {
console.log(`${key} ${value}`);
});
/_
a 5
b 7
c 9
_/
