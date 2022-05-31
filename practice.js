function myfirst(){
    var names=prompt("enter your name");
    document.getElementById("demo").innerHTML="hello"+" "+names;

}
function myfunction_display(){
    var names=prompt("enter your name");
    document.getElementById("demo").innerHTML="hello"+" "+names;
}
function addition(a,b){
    return a*b;
}
document.getElementById("demo").innerHTML=addition(3,4)
const person1={
    firstname:"kiruthiga",
    lastname: "muthukumar",
}
document.getElementById("demo").innerHTML="Hi"+" "+person1.firstname+" "+person1.lastname;
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
// ************************string**************************************** */
const object = {
    name : "kiruthiga",
    dob: "19-06-2001",
    department:"computer science and engineering"
};
let text="";
for(let i in object){
    text+=object[i]+" ";
}
document.getElementById("demo").innerHTML=text
function object(name,id){
    this.name=name;
    this.id=id
};
emp =new object("kieu",10056)
document.getElementById("demo").innerHTML=(emp.name+" "+emp.id)
const obj={
    name:"kiruthiga",
    get na(){
        return this.name.toUpperCase();
    }

}
document.getElementById("demo").innerHTML=obj.name();
 
