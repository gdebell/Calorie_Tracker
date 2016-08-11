// jquery events

$(document).on('ready', function(e) {
  //console.log('sanity check!');
  calorieTotal = 0;
});

$('form').on('submit', function(e) {
  e.preventDefault();

  var dataFromSite = ($('#fruitInput').val());

  if (dataFromSite === ' ') {
    alert ('Invalid input. Please try again.');
  }
  $('#output')[0].options.length = 0;
  var ajaxReturn = searchFoodList(dataFromSite).then(accessData).then(makeObject).then(makeSelectBar);
  $('#fruitInput').val('');
  console.log('Items being removed: ' + $('#foodCount').detach());
});

$('#output').change(function(e) {
  var foodItemSelected = $('#output').val();
  var foodName = (foods[foodItemSelected].name);
  var foodCalories = Math.ceil(foods[foodItemSelected].calories);
  var foodFat = Math.ceil(foods[foodItemSelected].fat);
  $('#resultTable').append('<tr><td>' + foodName + '</td><td>' + foodCalories + '</td><td>' + foodFat + '</td></tr>');

  //console.log(typeof foodCalories);
  //console.log(foodCalories);

  calorieTotal += foodCalories;
  fatTotal += foodFat;
  console.log('Calorie results: ' + calorieTotal);
  console.log('Fat results: ' + fatTotal);

  $('#calFatTotals tr').remove();
  $('#calFatTotals').append('<tr><td>Totals'+'                            ' + '</td><td>       ' + calorieTotal + '</td><td>       ' + fatTotal + '</td></tr>');

  if(calorieTotal > 2000) {
    $('#warning').append('Calorie in take is high.');
  }

});
