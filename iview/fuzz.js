
var x = 0;
for (var x=1; x <= 100; x++){
    if( x % 3 == 0 ) {
        document.write("fizz");
    } else {
        if( x % 5 == 0 ) {
            document.write("buzz");
        }
        if( x % 3 == 0 && x % 5 == 0) {
            document.write("FizzBuzz");
        }
    }
