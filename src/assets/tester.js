graphDiv = document.getElementById('tester');

graphDiv.on('plotly_selected', function(eventData) {
console.log(eventData.points);
var y = [];
var sel;
eventData.points.forEach(function(pt) {
  // console.log(pt);
  y.push(pt.y);
});
sel = y.join(',');
 $('button').trigger('click',["foo"]);
 $('#selectPoints').val(sel);
//  var m = $('#selectPoints').val();
//  console.log(m);
});