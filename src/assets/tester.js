graphDiv = document.getElementById('tester');

if(graphDiv){
graphDiv.on('plotly_selected', function(eventData) {
// console.log(eventData.points);
var y = [];
var sel;
eventData.points.forEach(function(pt) {
  // console.log(pt);
  y.push(pt.y);
});
sel = y.join(',');
 $('#selectPoints').val(sel);
 $('button').trigger('click');
//  var m = $('#selectPoints').val();
//  console.log(m);
})
}