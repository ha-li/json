var landscape = function() {
   var result = "";
   var flat = function(size) {
     for(var count = 0; count < size; count++)
        result += "_";
   };

   var mountain = function(size) {
      result += "/";
      for(var count = 0; count< size; count++)
         result += "'";
      result += "\\";
   };

   flat(3);
   mountain(4);
   flat(3);
   mountain(1);
   flat(2);
   print(result);
}()

