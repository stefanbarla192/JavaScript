/*My JavaScript to manipulate JSON and AJAX*/

/*window.onload = function () {*/

/*var cT;*/
/*var manufacturer;*/
document.getElementById("manufacturer").addEventListener("change", loadMyData, false);

document.getElementById("survey").addEventListener("change", loadMyData, false);




function loadMyData () {
    
    

    var mN = document.getElementById("manufacturer").value;
    
    var cV = document.getElementsByName("manufacturer");

        console.log(cV);
         

    
    if (mN != "") {


        var myRequest = new XMLHttpRequest();

        myRequest.open('GET', 'https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json');
        
        myRequest.onload = function() {
            
            if(myRequest.status >=200 && myRequest.status < 400) {
                
            var myData = JSON.parse(myRequest.responseText);
            /*console.log(myData);*/
            
                
                /*document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/BmTcmz6lh00" frameborder="0" allowfullscreen>';*/
                

            var manufacturerName = myData.data[mN].manufacturer;
            var manufacturerModel = myData.data[mN].model;
            var manufacturerPrice = "£ " + myData.data[mN].price;
            var manufacturerDescription = myData.data[mN].wiki;
            
            document.getElementById("manufacturerC").innerHTML = manufacturerName;
            document.getElementById("modelC").innerHTML = manufacturerModel;
            document.getElementById("priceC").innerHTML = manufacturerPrice;
                
            document.getElementById("descriptionC").innerHTML = '<a href='+manufacturerDescription+' target="_blank">Full description click here</a>';

            var qualityOverall = myData.data[mN].quality[0].rating;
            var qualityMechanical = myData.data[mN].quality[1].rating;
            var qualityPowertrain = myData.data[mN].quality[2].rating;
            var qualityBody = myData.data[mN].quality[3].rating;
            var qualityInterior = myData.data[mN].quality[4].rating;
            var qualityAccessories = myData.data[mN].quality[5].rating;
            
            document.getElementById("overallC").innerHTML = qualityOverall;
            document.getElementById("mechanicalC").innerHTML = qualityMechanical;
            document.getElementById("powertrainC").innerHTML = qualityPowertrain;
            document.getElementById("bodyC").innerHTML = qualityBody;
            document.getElementById("interiorC").innerHTML = qualityInterior;
            document.getElementById("accessoriesC").innerHTML = qualityAccessories;
            
            var carImage = myData.data[mN].img;
            
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



//*Some sample code to use for the programme above

/*var select = document.getElementById("item1");
select.onchange = function() {
    var selIndex = select.selectedIndex;
    var selValue = select.options(selIndex).innerHTML;
}*/


//*For those who feel brave enough :) there is this new thing querySelector()

/*var select = document.querySelector("#item1");*/


//*Here is another one of the codes to experiment

/*document.getElementById("item1").onchange = function(){
var selIndex = document.getElementById("item1").selectedIndex;
var selValue = document.getElementById("item1").options[selIndex].innerHTML;
}*/


//*Here is another one with a form on it

/*function delivery(x){
      var country = x.value;
      document.getElementById('lala').innerHTML = country;
}
<div id="lala"></div>
<form action="" method="post">
<select name="country" id="country" onChange="delivery(this)">
    <option value='lala'>Select Country</option>
    <option value='United_Kingdom'>United Kingdom</option>
    <option value='Russia'>Russia</option>
    <option value='Ukraine'>Ukraine</option>
    <option value='France'>France</option>
    <option value='Spain'>Spain</option>
    <option value='Sweden'>Sweden</option>
</select>
</form>*/




    
