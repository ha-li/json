// serializing primitives is done by concatenation with empty string
var tmp = "" + 1;
print(tmp);

tmp = "" + true;
print(tmp);

tmp = "" + null;
print(tmp);


// these 2 examples illustrate that marshaling (serializing) non-primitives
// in js is not trivial, hence the need for JSON.stringify.
// JSON.stringify will traverse the individual members
// and assemble the string piece by piece

tmp = "" + {identifier: "hello"};
print(tmp);

tmp = "" + ["identifier","hello"];
print(tmp);

// the reverse of serialization (unmarshaling/de-serialization) 
// is done via JSON.parse
