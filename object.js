var obj = {name:"Ted", age:5, position:"agent"};


// in javascript, the for loop can be used to iterate over
// each property in an object. This is possible because the syntax
// allows for it
for(var i in obj) {
   print(obj[i]);
};


// which means this is also perfectly legal
print(obj["name"]);
