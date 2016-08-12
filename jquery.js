// jquery events

$(document).on('ready', function(e) {
  //console.log('sanity check!');
  calorieTotal = 0;
  var gender = 1;

});

$('form').on('submit', function(e) {
  e.preventDefault();

  var dataFromSite = ($('.fruit_input').val());

  if (dataFromSite === ' ') {
    alert ('Invalid input. Please try again.');
  }
  $('.output')[0].options.length = 0;
  var ajaxReturn = searchFoodList(dataFromSite).then(accessData).then(makeObject).then(makeSelectBar);
  $('.fruit_input').val('');
  //console.log('Items being removed: ' + $('#foodCount').detach());
});

$('.output').change(function(e) {
  var foodItemSelected = $('.output').val();
  var foodName = (foods[foodItemSelected].name);
  var foodCalories = Math.ceil(foods[foodItemSelected].calories);
  var foodFat = Math.ceil(foods[foodItemSelected].fat);
  $('#result_table').append('<tr><td>' + foodName + '</td><td>' + foodCalories + '</td><td>' + foodFat + '</td></tr>');

  calorieTotal += foodCalories;
  fatTotal += foodFat;

  $('.cal_fat_totals tr').remove();
  $('.cal_fat_totals').append('<tr><td>Total'+'                            ' + '</td><td>       ' + calorieTotal + '</td><td>       ' + fatTotal + '</td></tr>');

  var menMax = 2600;
  var womMax = 2300;

    if(gender === '1' && calorieTotal > womMax) {
      $('.warning').append('Calorie intake is higher than 2300 calories for the day.');
    } else if (gender === '2'  && calorieTotal > menMax) {
      $('.warning').append('Calorie intake is higher than 2600 calories for the day.');
    }

});

$('#food_form input').on('change', function() {
   gender = ($('input[name=sex]:checked').val());
   console.log('user picked', gender);
   console.log(typeof gender);
});
