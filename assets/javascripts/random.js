// Random Number Generator

$random_number = Math.floor(Math.random() * 9) + 1;  // returns a random integer from 1 to 9
document.getElementById("random-img").setAttribute(
    'src', 
    '/assets/third-party/giphy.com/animated-typography-franchise/error-' + $random_number + '.gif')