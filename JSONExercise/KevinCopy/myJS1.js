var myImage;

var mainButton = document.getElementById("myButton");

mainButton.addEventListener('click', loadMyData, false);
mainButton.addEventListener('click', loadMyImage, false);


function loadMyData () {
    $.getJSON( "http://wger.de/api/v2/exercise/?language=2", function( data ) {
    /*console.log(data);*/
    $.each(data.results, function( index, exercise ) {
        /*for ( i=0; i < index; i++) {*/
            if (index === 5) {
                /*console.log(exercise);*/
        $("#exercise_list").append('<li>' + exercise.name + '</li>');
            }
        /*}*/
        /*console.log(exercise);*/
        /*$("#exercise_list").append('<li>' + index + ' - ' + exercise.name + '</li>');*/
    });
});
}

function loadMyImage () {
    $.getJSON( "https://wger.de/api/v2/exerciseimage/?language=2", function( data ) {
    /*console.log(data);*/
    $.each(data.results, function( index, exerciseimage ) {
            if (index === 5) {
                /*var url=$('#imgContainer').exerciseimage.image;*/
        /*myImage = exerciseimage.image;*/
        /*$("#exercise_Pics").append('<span>' + exerciseimage.image + "<br>" + '</span>');*/
          /*$("#exercise_Pics").append('<span>' + src = myImage + '</span>');*/
            /*$("#imgContainer").attr("src", myImage);*/
                var real_img='<img src="'+exerciseimage.image+'" width="auto" height="400" alt="Exercise image">';

                $('#imgContainer').html(real_img);
    }
        /*console.log(myImage);*/
    });
});
}

