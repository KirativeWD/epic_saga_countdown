
// FUNCTION FOR COUNTING DOWN TO SAGA RELEASE

function calculateSagaCountdown(){

    var countdownTimer;
    
    //Get today's date.
    var now = new Date();

    //release will occur on.
    var sagaRelease = new Date("Jan 27, 2023 00:00:00").getTime();

    var nextSagaRelease = sagaRelease;
    var releaseDate = new Date(nextSagaRelease);

    //Get the difference in seconds between the two days.
    var diffSeconds = Math.floor((releaseDate.getTime() - now.getTime()) / 1000);

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    //Don't calculate the time left if it is release day.
    if(now.getTime() != releaseDate.getTime()){
        //Convert these seconds into days, hours, minutes, seconds.
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }

    //Add our counts to their corresponding HTML elements.
    document.querySelector('.days').innerHTML = '| ' + days + ' days | ';
    document.querySelector('.hours').innerHTML = hours + ' hours | ';
    document.querySelector('.mins').innerHTML = minutes + ' minutes |';
    document.querySelector('.secs').innerHTML = seconds;

    //Recursive call after 1 second using setTimeout
    countdownTimer = setTimeout(calculateSagaCountdown, 1000);

    var timeLeft = sagaRelease - now.getTime();

    if (timeLeft < 0) {
        clearTimeout(countdownTimer);
        document.querySelector('.timer').style.display = 'none';
        document.querySelector('.cover').style.display = 'block';
        document.querySelector('h1').innerHTML = 'EPIC: Cyclops Saga Available Now!';
    } else if (timeLeft > 0 && timeLeft <= 3000) {
        document.querySelector('.countdown').style.opacity = 1;
        document.querySelector('.countdown').style.animation = 'none';
        document.querySelector('.countdown').style.transition = 'opacity 1s linear';
        setTimeout(function() {
            document.querySelector('.countdown').style.opacity = 0;
            setTimeout(function() {
                clearTimeout(countdownTimer);
                document.querySelector('.countdown').style.opacity = 1;
                document.querySelector('.timer').style.display = 'none';
                document.querySelector('.cover').style.display = 'block';
                document.querySelector('h1').innerHTML = 'Epic: Cyclops Saga Available Now!';
            }, 2000)
        }, 1000)
    }
}

calculateSagaCountdown();

// PARTICLES JS

particlesJS("shimmers", {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 1026
            }
        },
        "color": {
            "value": "#ffd84d"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.06,
                "sync": false
            }
        },
        "size": {
            "value": 20,
            "random": true,
            "anim": {
                "enable": true,
                "speed":7,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed":6,
            "direction":"none",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract": {
                "enable":false
            }
        }
    }, "retina_detect": true
});