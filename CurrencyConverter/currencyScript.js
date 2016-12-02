/*This is my JS for the Car Luxury Practice*/


var userCurrency = document.getElementById("myCurrencies");


var myButton = document.getElementById("buttonConvert");

myButton.addEventListener("click", currencyConvert, false);



function currencyConvert () {
    
    var currencyStored = userCurrency.options[userCurrency.selectedIndex].value;
    
    console.log(currencyStored);
    
    /*var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;*/
    
    
    /*console.log(surveyStored);
    console.log(manufacturerStored);*/

    
    var myRequest = new XMLHttpRequest;
    
    myRequest.open("GET", "http://www.apilayer.net/api/live?access_key=c29bce769c1a5fd47254446ab5037927&%20source%20=%20GBP&%20currencies%20=%20EUR&%20format%20=%201", true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
            if (currencyStored === "") {
                
                function clearAll()
                    {
                        var hideText = document.getElementsByClassName("data");
                        for(var i = 0; i < hideText.length; i++)
                        {
                            hideText[i].innerHTML = "";
                            console.log(hideText);
                        }
                    }
                
                clearAll();
                
                document.getElementById("messageAlert").innerHTML = "Please you must enter a value to be converted..."; 
                
            } else {
                
                
                document.getElementById("rightQuote").innerHTML = myData.quotes.USDAED;
                
                /*document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
                
                document.getElementById("priceC").innerHTML = myData.data[manufacturerStored].price;
                
                
                document.getElementById("descriptionC").innerHTML = '<a href='+myData.data[manufacturerStored].wiki+' target="_blank">Full description click here</a>';
  */
                
                document.getElementById("messageAlert").innerHTML = "";
                
                
            }
            
        }  
        
    }
    
    myRequest.onerror = function() {
        
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server!";
    }
    
    myRequest.send();
    
  }  























