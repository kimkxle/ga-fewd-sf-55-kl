//JavaScript for selecting ice cream

var setFlavor = function() {
  console.log('user has set a flavor');
  console.log(event);
  //what flavor was clicked?
  var pickedFlavor= event.target;
  // what is the text for that flavor?
  // thurn pickedflavor into jQuery object before calling text
  var flavorText= $(pickedFlavor).text();
  console.log(flavorText);
}
$('#Flavor li').click(setFlavor)

$('#NumScoops li').click(setNumScoops)

var setNumScoops = function() {
  console.log('user has set a flavor');
  console.log(event);
  //what flavor was clicked?
  var pickedNumScoops= event.target;
  // what is the text for that flavor?
  // turn pickedflavor into jQuery object before calling text
  var NumScoopsText= $(pickedNumScoops).text();

  //update order details withpicked numScoops
  $('picked-num-scoops').text(scoopsText);
}
