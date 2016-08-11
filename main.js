//Refactor Notes
//5 line method
//extract to well-names variables
//change generic for loops to forEach
//Long files -> short files



$(document).on('ready', function(e) {
    console.log('sanity check!');
});


//global variable:
var calorieTotal = 0;
var fatTotal = 0;

$('form').on('submit', function(e) {
    e.preventDefault();

    var dataFromSite = ($('#fruitInput').val());

    if (dataFromSite === ' ') {
       alert ("Invalid input. Please try again.");
    }

    var ajaxReturn = searchFoodList(dataFromSite).then(accessData).then(makeObject).then(makeSelectBar)
    $('#fruitInput').val('');
})


function searchFoodList(dataFromSite) {
  return new Promise(function(resolve, reject) {
    $.ajax ({
      method: 'GET',
      url:'https://api.nutritionix.com/v1_1/search/' + dataFromSite + '?fields=item_name%2Cnf_calories%2Cnf_total_fat&appId=530e689d&appKey=cdb9516e92068d4107bdfbb609f61010'
    }).done (function(data) {
      //console.log(data);
      //console.log("inside function");
      console.log("Ajax has been called!")
      resolve(data);
    }).fail(function(err) {
      console.log('Error. Your ajax call is busted and jankie!');
    })
  });
}


accessData = function(inputFromAjax) {
  var c = inputFromAjax.hits
  var listOfHits = [];

  for (key in c) {
    listOfHits.push(c[key]);
  };
  return listOfHits
}


var foods = [];
makeObject = function (listOfHits) {
  listOfHits.forEach(function(object) {
    var itemName = object.fields.item_name;
      foods.push({
        name: itemName,
        calories: object.fields.nf_calories,
        fat: object.fields.nf_total_fat
    });
  });
  //console.log(foods);
  //console.log(foods[0].name);
  return foods;
}


makeSelectBar = function (foods) {
  for (var i = 0; i < foods.length; i++) {
    $('#output').append('<option value="' + i + '">' + foods[i].name + '</option>');
  }
}



$('#output').change(function(e) {
    var foodItemSelected = $('#output').val();
    var foodName = (foods[foodItemSelected].name);
    var foodCalories = Math.ceil(foods[foodItemSelected].calories);
    var foodFat = Math.ceil(foods[foodItemSelected].fat);

    $('#resultTable').append('<tr><td>' + foodName + '</td><td>' + foodCalories + '</td><td>' + foodFat + '</td></tr>');

})



//
// $('#output').change(function(e) {
//     var foodItemSelected = $('#output').val();
//     var foodName = (foods[foodItemSelected].name);
//     var foodCalories = Math.ceil(foods[foodItemSelected].calories);
//     var foodFat = Math.ceil(foods[foodItemSelected].fat);
//
//       $('#resultTable').append('<tr><td>' + foodName + '</td><td>' + foodCalories + '</td><td>' + foodFat + '</td></tr>');









//$('#resultTable').empty();
// for (var i = 0; i< foods.length; i++) {
//       if (foods[i].name === foodItemSelected) {
//         console.log("In display function!!!!");
//             var matchPosition = i;
//             $('#resultTable').append('<tr><td>' +           foods[matchPosition].name + '</td><td>' + foods[matchPosition].calories + '</td><td>' + foods[matchPosition].fat + '</td></tr>');
//             //console.log("CALORIE INFO:  ");
//             //console.log(foods[matchPosition].calories);
//             //console.log(typeof foods[matchPosition].calories);
//             console.log("FAT INFORMATION: ");
//             console.log(foods[matchPosition].fat);
//             console.log(typeof foods[matchPosition].fat);
//
//             calorieTotal += (foods[matchPosition].calories);
//
//             fatTotal += (foods[matchPosition].fat);
//
//             console.log("CAL TOTAL>>>>>>>>");
//             console.log(calorieTotal);
//             console.log("FAT TOTAL::::::::");
//             console.log(fatTotal);
//       }
// }















//
//             //add an event listner
//
//             // $('#resultTable:last').append('<tr><td>' + '       ' + '</td><td>' + calorieTotal + '</td><td>' + fatTotal + '</td></tr>');
//             break;
//           }
//         }
// });
// }


    //
    //       })
    //       //add event listner
    //
    //
    //     });
    //
    //
    //   });
    // });









      //   console.log('Food Item Selected: ' + foodItemSelected);
      //   //console.log('Info of selected item ' + )
      //
      //
      //
      // $('#results').append('<p>' + foodItemSelected + '</p>');
      // });


      // $('#select2').change(function(e) {
      //   var titleSelect2 = $('#select2').val();
      //   var titleSelect2Num = parseInt(titleSelect2);





    //
    // }; }); }); });



    //}).then(function(infoForSelected){

    //var calories = data.hits[0].fields.nf_calories;
    //var totalFat = data.hits[0].field.nf_total_fat;
    //console.log(calories);
//     //console.log(totalFat);
//   })
//
//   });
// });
