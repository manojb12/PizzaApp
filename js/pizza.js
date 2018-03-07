$(document).ready(function() {
    // Ajax Call for get data from json

    $Pizzas = [];

    $.ajax({
        url: 'pizzas.json',
        type: 'GET',
        success: function(response) {
            if (response) {
                $Pizzas = response;
                //  var jsonData = $.parseJSON(s);
                // console.log(response)
                var tr_html, final_html = '';

                for (var i = 0; i < response.length; i++) 
                  {
                    tr_html = '<tr>';
                    tr_html += '<td>' + response[i].No + '</td>';
                    tr_html += '<td>' + response[i].PizzaName + '</td>';
                    tr_html += '<td>' + response[i].Ingredients + '</td>';
                    tr_html += '<td>' + response[i].Price + '</td>';
                    tr_html += '<td>' + '<button data-id="' + i + '" class="btnOrder" onclick="print(this);">' + "Order Now" + '</button>' + '</td>';
                    tr_html += '</tr>';
                    final_html += tr_html;
                    //  console.log(final_html);

                }
                $('#pizza-list tbody').html(final_html);

            }
        }
    });

});


function print(t) {
    
    $selected = $Pizzas[parseInt($(t).attr("data-id"))];
    $str = "";
    $st = "";
    
    $st += '[{';
    $.each($selected, function(key, value) {
        $str += '<strong>' + key + '</strong>' + " : " + ' ' + value + ' ' + ',</br> ';
        $st += '"' + key + '"' + " : " + '"' + value + '"' + ",";
    });
    $st += '}]';

    $("#disp").show();
    alert("Your order has been successfully placed");

    document.getElementById('info').innerHTML = $str;
    //  console.log($str);
   // console.log($st);
  
  // Ajax Call for Write a data in json
    $.ajax({
        url: 'order.php',
        type: 'POST',
        data: {
            'data': $st
        },
        success: function(response) {
            // console.log(response)
        }
    });
};