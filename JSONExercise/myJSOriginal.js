var mainButton = document.getElementById("myButton");

mainButton.addEventListener('click', loadMyData, false);
mainButton.addEventListener('click', loadMyImage, false);
mainButton.addEventListener('click', loadMuscle, false);


function loadMyData () {
    $.getJSON( "http://wger.de/api/v2/exercise/?language=2", function( data ) {
    /*console.log(data);*/
    $.each(data.results, function( index, exercise ) {
    
            if (index === 5) {
                
        $("#exercise_list").append('<span>' + exercise.name + '</span>');
        $("#exercise_description").append('<span>' + exercise.description + '</span>');
        /*$("#exercise_muscle").append('<span>' + exercise.equipment[10] + '</span>');*/
                /*console.log(exercise.muscle);*/
            }
       
    });
});
}

function loadMuscle () {
    $.getJSON( "http://wger.de/api/v2/muscle/?language=2", function( data ) {
    console.log(data);
    $.each(data.results, function( index, muscle ) {
            
                console.log(muscle);
            if (index === 5) {
                
        $("#exercise_muscle").append('<span>' + muscle+ '</span>');
                
            var muscleFLink = "http://wger.de/static/images/muscles/muscular_system_front.svg";
            /*var muscleFLink1 = "http://wger.de/static/images/muscles/main/muscle-2.svg";*/
                
                var muscleF='<img src="'+muscleFLink+'" width="auto" height="360" alt="Exercise image">';
                
                $('#imgMuscle').html(muscleF);
                console.log(muscleF);
            }
       
    });
});
}

function loadMyImage () {
    $.getJSON( "https://wger.de/api/v2/exerciseimage/?language=2", function( data ) {
    /*console.log(data);*/
    $.each(data.results, function( index, exerciseimage ) {
            console.log(exerciseimage);
            if (index === 5) {
 
                var real_img='<img src="'+exerciseimage.image+'" width="auto" height="360" alt="Exercise image">';

                $('#imgContainer').html(real_img);
    }
       
    });
});
}

