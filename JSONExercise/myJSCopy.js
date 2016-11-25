/*My JavaScript to manipulate JSON and AJAX*/

/*window.onload = function () {*/

/*var cT;*/

document.getElementById("manufacturer").addEventListener("change", loadMyData, false);

document.getElementById("survey").addEventListener("change", loadMyData, false);



function loadMyData () {
    
    

    var mN = document.getElementById("manufacturer").value;
    
    var cV = document.getElementById("manufacturer").value;
        
            /*console.log(cV, mN);*/ 

    
    if (mN != "") {

        var myRequest = new XMLHttpRequest();

        myRequest.open('GET', 'https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json');
        
        myRequest.onload = function() {
            
            if(myRequest.status >=200 && myRequest.status < 400) {
                
            var myData = JSON.parse(myRequest.responseText);
            /*console.log(myData);*/
            
                
             for (i = 0; i < manufacturer.length; i++) {
                
                console.log(i);
                
                /*document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/BmTcmz6lh00" frameborder="0" allowfullscreen>';*/
                
                
            /*}*/   
                
                
                
                
                
            
            var manufacturerName = myData.data[i].manufacturer;
            var manufacturerModel = myData.data[i].model;
            var manufacturerPrice = "£ " + myData.data[i].price;
            var manufacturerDescription = myData.data[i].wiki;
            
            document.getElementById("manufacturerC").innerHTML = manufacturerName;
            document.getElementById("modelC").innerHTML = manufacturerModel;
            document.getElementById("priceC").innerHTML = manufacturerPrice;
                
            document.getElementById("descriptionC").innerHTML = '<a href='+manufacturerDescription+' target="_blank">Full description click here</a>';

            var qualityOverall = myData.data[i].quality[0].rating;
            var qualityMechanical = myData.data[i].quality[1].rating;
            var qualityPowertrain = myData.data[i].quality[2].rating;
            var qualityBody = myData.data[i].quality[3].rating;
            var qualityInterior = myData.data[i].quality[4].rating;
            var qualityAccessories = myData.data[i].quality[5].rating;
            
            document.getElementById("overallC").innerHTML = qualityOverall;
            document.getElementById("mechanicalC").innerHTML = qualityMechanical;
            document.getElementById("powertrainC").innerHTML = qualityPowertrain;
            document.getElementById("bodyC").innerHTML = qualityBody;
            document.getElementById("interiorC").innerHTML = qualityInterior;
            document.getElementById("accessoriesC").innerHTML = qualityAccessories;
            
            var carImage = myData.data[i].img;
            
            document.getElementById("imgC").innerHTML = '<img src="https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/'+carImage+'" width="auto" height="auto" alt="Car image">';
               
                   
            
            /*document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/BmTcmz6lh00" frameborder="0" allowfullscreen>';*/
                
                
                
                
            
           var cT = document.getElementById("survey").value;
 
             /*This is the code for the Canvas JS chart */  
                
             

                /*window.onload = function () {*/
	           var chart = new CanvasJS.Chart("chartContainer", {
		          theme: "theme1",//theme1
                   backgroundColor: "transparent",
		         /* title:{
			         text: "Customer Survey"              
		          },*/
                   dataPointMaxWidth: 20,
                   axisX:{
                    labelFontColor: "white",
                    gridColor: "white",
                    lineColor: "white"
                    },
                   axisY:{
                    labelFontColor: "white",
                    gridColor: "white",
                    gridThickness: 1,
                    lineColor: "white"
                    },
		           animationEnabled: true,   // change to true
		          data: [              
		          {
			// Change type to "bar", "area", "spline", "pie",etc.
                 indexLabelFontColor: "white",
			     type: cT,
			     dataPoints: [
				{ label: "Body", y: qualityBody },
                { label: "Accessories",  y: qualityAccessories },
				{ label: "Interior", y: qualityInterior },
				{ label: "Powertrain",  y: qualityPowertrain },
                { label: "Mechanical",  y: qualityMechanical },
				{ label: "Overall",  y: qualityOverall }
			     ]
		          }
		          ]
	           });
	           chart.render();
                

            document.getElementById("messageAlert").innerHTML = " ";

        
            }
        
        } else {
            
            document.getElementById("messageAlert").innerHTML = "We connected to the server but it returned an error!";
        }
        
        
        
        
        };

        myRequest.onerror = function() {
            
            document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server!";
            
        };
        
        myRequest.send();
        
        
    } else {
        
        
        document.getElementById("messageAlert").innerHTML = "Please you must choose a car manufacturer to load data...";

    }
}

