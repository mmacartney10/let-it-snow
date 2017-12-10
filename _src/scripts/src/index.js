(function(window, Twoundefined) {

  var ELEMENT_drawLand = document.querySelector('[data-draw-land]');

  var params = {
    width: '100%',
    height: '25vh'
  }

  function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

  function init() {
    var two = new Two(params).appendTo(ELEMENT_drawLand);

    var twoWidth = window.innerWidth;
    var twoHeight = (window.innerHeight / 4) - 2;

    var curveX1 = 0;
    var curveY1 = randomNumber(twoHeight);

    var curveX2 = twoWidth / 3;
    var curveY2 = randomNumber(twoHeight);

    var curveX3  = (twoWidth / 3) * 2;
    var curveY3 = randomNumber(twoHeight);

    var curveX4 = twoWidth;
    var curveY4 = randomNumber(twoHeight);

    var curveX5 = twoWidth;
    var curveY5 = twoHeight;

    var curveX6 = 0;
    var curveY6 = twoHeight;

    var curve = two.makeCurve(
      curveX1, curveY1,
      curveX2, curveY2,
      curveX3, curveY3,
      curveX4, curveY4,
      curveX5, curveY5,
      curveX6, curveY6,
      true
    );

    curve.linewidth = 2;
    curve.fill = '#FFF';
    curve.stroke = '#FFF';

    two.update();
  }

  init();

})(window, Two);
