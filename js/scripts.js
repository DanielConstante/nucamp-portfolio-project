$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$(document).ready(function () {
    var entries = [
    { label: 'BACK TO TOP', url: 'https://www.jqueryscript.net/tags.php?/Back%20to%20top/', target: '_top' },
    { label: 'BOOTSTRAP', url: 'https://www.jqueryscript.net/tags.php?/Bootstrap/', target: '_top' },
    { label: 'HTML', url: 'https://www.jqueryscript.net/tags.php?/carousel/', target: '_top' },
    { label: 'CSS', url: 'https://www.jqueryscript.net/tags.php?/countdown/', target: '_top' },
    { label: 'JAVASCRIP', url: 'https://www.jqueryscript.net/tags.php?/Drop%20Down%20Menu/', target: '_top' },
    { label: 'CODEPEN', url: 'https://codepen.io/', target: '_top' },
    { label: 'JAVA', url: 'https://threejs.org/', target: '_top' },
    { label: 'C++', url: 'https://www.jqueryscript.net/tags.php?/form%20validation/', target: '_top' },
    { label: 'C#', url: 'http://jscompress.com/', target: '_top' },
    { label: '.NET', url: 'https://tinypng.com/', target: '_top' },
    { label: 'CORE', url: 'http://caniuse.com/', target: '_top' },
    { label: 'PHP', url: 'https://goo.gl/', target: '_top' },
    { label: 'AWS', url: 'https://www.jqueryscript.net/tags.php?/grid%20layout/', target: '_top' },
    { label: 'TWITTER', url: 'https://twitter.com/niklaswebdev', target: '_top' },
    { label: 'VISUAL BASIC', url: 'http://nkunited.deviantart.com/', target: '_top' },
    { label: 'PASCAL', url: 'http://gulpjs.com/', target: '_top' },
    { label: 'PYTHON', url: 'https://www.browsersync.io/', target: '_top' },
    { label: 'GITHUB', url: 'https://github.com/', target: '_top' },
    { label: 'REACT', url: 'https://www.shadertoy.com/', target: '_top' },
    { label: 'REACT NATIVE', url: 'https://www.jqueryscript.net/tags.php?/tree%20view/', target: '_top' },
    { label: 'NODE.JS', url: 'http://jsperf.com/', target: '_top' },
    { label: 'NPM', url: 'https://foundation.zurb.com/', target: '_top' },
    { label: 'VISUAL STUDIO', url: 'https://createjs.com/', target: '_top' },
    { label: 'ANGULAR', url: 'http://julian.com/research/velocity/', target: '_top' },
    { label: 'SASS', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
    { label: 'jQUERY', url: 'https://jquery.com/', target: '_top' },
    { label: 'WORDPRESS', url: 'https://www.jqueryscript.net/tags.php?/Notification/', target: '_top' },
    { label: 'DANIEL CONSTANTE', url: 'https://www.jqueryscript.net/tags.php?/Notification/', target: '_top' },
    { label: 'WEB DEVELOPER', url: 'https://www.jqueryscript.net/tags.php?/Notification/', target: '_top' },
    { label: 'GIT', url: 'https://www.jqueryscript.net/tags.php?/parallax/', target: '_top' }];
    
  
    var settings = {
      entries: entries,
      width: 1940,
      height: 1080,
      radius: '45%',
      radiusMin: 75,
      bgDraw: true,
      bgColor: 'black',
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 1,
      fontFamily: 'BioRhyme',
      fontSize: '20',
      fontColor: '#16F1D4',
      fontWeight: 'bold', //bold
      fontStyle: 'BioRhyme', //italic 
      fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true };
  
    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#tag-cloud').svg3DTagCloud(settings);
  });



