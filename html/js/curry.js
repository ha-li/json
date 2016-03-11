/*
  An example of a curry function.
*/
function jformat(an_int) {
    function f(k) {
        return k < 10 ? '0' : k;
    }

    return f(an_int) + an_int;
}


