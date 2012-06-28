function getterGenerator( property ) {
  return function ( obj ) {
    return obj[property];
  };
}

var cx = getterGenerator( "cx" ),
     r = getterGenerator( "r" );

console.log("cx: ", cx( { cx: 'hello world', r: 5 } ));
console.log("r:", r( { cx: 'hello world', r: 5 } ));

var o =  { cx: 'witaj świecie', r: 4 };

console.log("cx: ", cx( o ));
console.log("r:", r( o ));
