const music_ = new Audio('bg.mp3');

$(document).ready(() => {
    /* Disk Loading Animation */
    gsap.to('.section2 .window #disk', {
        x: -200,
        duration: 2,
        delay: 2
    });
    /* Disk Rotating Animation */
    function rotate() {
        gsap.to('.section2 .window #disk', {
            duration: 8,
            delay: 1,
            repeat: -1,
            rotate: 360
        });
    }

    $('#track1').click(() => {
        music_.play();
        /* Disk Animation Starts Here */
        rotate();

    })
    $('#track2').click(() => {
        music_.play();
        rotate();

    })
    $('#track3').click(() => {
        music_.play();
        rotate();

    })
    $('#track4').click(() => {
        music_.play();
        rotate();

    })
    $('#track5').click(() => {
        music_.play();
        rotate();

    })
    $('#track6').click(() => {
        music_.play();
        rotate();

    })
    $('#track7').click(() => {
        music_.play();
        rotate();

    })
    $('#stop').click(() => {
        music_.pause();
        gsap.killTweensOf('.section2 .window #disk', 'rotate');

    })
    $('#play').click(() => {
        /* Disk Animation Start here */
        music_.play();
        rotate();

    })
    $('#pause').click(() => {
        /* Disk Animation Stop here */
        music_.pause();
        // Stop the 'rotate' animation on the 'disk' element
        gsap.killTweensOf('.section2 .window #disk', 'rotate');
    })
})