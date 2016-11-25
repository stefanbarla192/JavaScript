/*This code is just to practice building JSON files*/

/*var car = {
    "model": "Audi",
    "price": 25000,
    "engine": "Petrol"
}

var F1drivers = ["Lewis", "Kimi", "Fernando"];*/

var F1 = {
    
    "data": [
    {
        "car": "Mercedes",
        "driver": "Lewis",
        "wins": 2
    }, 
    
    {
        "circuit": "Monaco",
        "pointsystem": [
            {
                "firstplace": 25,
                "secondplace": 18,
                "thirdplace": 15
            }
        ],
        "teams": 11
    }
]
}

console.log(F1.data[1].pointsystem[0].thirdplace);
/*console.log(F1drivers[2]);*/
