// jquery events

$(document).on('ready', function(e) {
  //console.log('sanity check!');
  calorieTotal = 0;
  var gender = 1;
  var user_pick_cal;
  var user_pick_cal_num;

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


    if (calorieTotal > user_pick_cal_num) {
      $('.warning').append('Calorie intake is higher than your ' + user_pick_cal + ' calorie goal for the day.');
    } else if(gender === '1' && calorieTotal > womMax) {
      $('.warning').append('Calorie intake is higher than 2300 calories for the day.');
    } else if (gender === '2'  && calorieTotal > menMax) {
      $('.warning').append('Calorie intake is higher than 2600 calories for the day.');
    }

});

$('#food_form input').on('change', function() {
   gender = ($('input[name=sex]:checked').val());
   //console.log('user picked', gender);
   //console.log(typeof gender);
});

$('form').on('submit', function(e) {
  user_pick_cal = ($('.user_pick_cals').val());
  //console.log('user picked', user_pick_cal);
  //console.log(typeof user_pick_cal);
  user_pick_cal_num = parseInt(user_pick_cal);
  console.log(user_pick_cal_num);
  console.log(typeof user_pick_cal_num);
});



$('form').on('submit', function(e) {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1 + '%';
    }
  }
});
