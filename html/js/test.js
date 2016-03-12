


function a(x) {
   var w = function (y) {
      return x + y;
   }
   return w;
}


print(a(3)(4));
