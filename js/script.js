/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function mask() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "videos/Animatie_mask_sound.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();
    }
}


D7A1A1

function tear() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "videos/Animatie_tear_sound.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();
    }
}

function eye() {
    document.getElementById("knoppen").style.opacity = "1.0";
    var video = document.getElementById('achtergrondvideo');
    video.src = "videos/Animatie_eye_2(inzoom)_sound.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('achtergrondvideo').addEventListener('ended' ,reload, false );
    function reload() {
        location.reload();
    }
}



