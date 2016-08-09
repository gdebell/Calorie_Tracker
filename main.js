$(document).on('ready', function(e) {
  console.log("Sanity Check!");
})


$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var dataFromSite = ($('#fruitInput').val());

  $.ajax ({
    method: 'GET',
    url:'https://api.nutritionix.com/v1_1/search/' + dataFromSite + '?fields=item_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010',

  }).done (function(data) {
    var c = data.hits
    for (key in c) {
      console.log(c[key]);
      console.log('Item Name: ' + c[key].fields.item_name);
      //console.log('Calories: ' + c[key].fields.nf_calories);
      var foodCalories = c[key].fields.nf_calories;
      console.log(foodCalories);
      //console.log('Total fat: ' + c[key].fields.nf_total_fat);
      var foodFat = c[key].fields.nf_total_fat;
      console.log(foodFat);
      console.log('                          ');

      var searchOptions = c[key].fields.item_name;

      $('#output').append('<option>' + searchOptions + '</option>');


      $('#output').change(function(e) {
        var foodItemSelected = $('#output').val();
        console.log(c[key].fields.nf_calories);
        console.log('Food Item Selected: ' + foodItemSelected);
        //console.log('Info of selected item ' + )



      $('#results').append('<p>' + foodItemSelected + '</p>');
      });


      // $('#select2').change(function(e) {
      //   var titleSelect2 = $('#select2').val();
      //   var titleSelect2Num = parseInt(titleSelect2);






    }; }); }); });



    //}).then(function(infoForSelected){

    //var calories = data.hits[0].fields.nf_calories;
    //var totalFat = data.hits[0].field.nf_total_fat;
    //console.log(calories);
//     //console.log(totalFat);
//   })
//
//   });
// });








// https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=530e689&appKey=cdb9516e92068d4107bdfbb609f61010

 // https://api.nutritionix.com/v1_1/search/celery&ppId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010
// // v1_1/search/{phrase}
//
// https://api.nutritionix.com/v1_1/search/celery?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010

// https://api.nutritionix.com/v1_1/search/celery?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010
// https://api.nutritionix.com/v1_1/search/celery?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010
