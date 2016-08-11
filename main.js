//Refactor Notes
//5 line method
//extract to well-names variables
//change generic for loops to forEach
//Long files -> short files

//global variable:

var calorieTotal = 0;
var fatTotal = 0;

// helper functions

function searchFoodList(dataFromSite) {
  return new Promise(function(resolve, reject) {
    $.ajax ({
      method: 'GET',
      url:'https://api.nutritionix.com/v1_1/search/' + dataFromSite + '?fields=item_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010'
    }).done (function(data) {
      //console.log(data);
      //console.log('inside function');
      console.log('Ajax has been called!');
      resolve(data);
    }).fail(function(err) {
      console.log('Error. Your ajax call is busted and jankie!');
    });
  });
}

function accessData(inputFromAjax) {
  var c = inputFromAjax.hits;
  var listOfHits = [];

  for (var key in c) {
    listOfHits.push(c[key]);
  }
  return listOfHits;
}

var foods = [];
function makeObject(listOfHits) {
  foods = [];
  listOfHits.forEach(function(object) {
    var itemName = object.fields.item_name;
    foods.push({
      name: itemName,
      calories: object.fields.nf_calories,
      fat: object.fields.nf_total_fat
    });
  });
  // console.log(foods);
  //console.log(foods[0].name);
  return foods;
}

function makeSelectBar (foods) {
  for (var i = 0; i < foods.length; i++) {
    $('#output').append('<option value="' + i + '" id="foodCount">' + foods[i].name + '</option>');
  }
}
