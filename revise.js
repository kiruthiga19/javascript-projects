function car(){
    this.brand="bmw";
    this.price="$444";
}
car.prototype.color="red";
console.log('test', car)
const obje=new car();
console.log(obj.color)       
const obj={
    name:"kiruthiga",
    id:"1233"
} 
console.log(obj.hasOwnProperty('name')) 
// ***********************to check the value present in the ui or not */
const newmap=new Map();
newmap.set(1,"kir").set(2,"sdj")
console.log(newmap.has(1))

// call bind -> it is used to passing an arrguments
// apply->to dissplay it on array
Object.defineProperty()
iterable
// set->entries
const fruit=new Map()
fruit.set("apple",500)
console.log(fruit.has("apple"))
