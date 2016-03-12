function Person(first, last, age, eyecolor) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
 
var f = new Person("John", "Doe", 50, "blue");

f.nationality = "English";

print(f.nationality);

f.getName = function () {
   return this.firstname + " " + this.lastname;
}

print(f.getName());


var m = new Person ("Mary", "Silva", 26, "green");

print(m.firstname);

// print(m.getName());


Person.prototype.inTenYearsAge = function () {
   return this.age + 10;
}

print(f.inTenYearsAge());
