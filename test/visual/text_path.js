(function() {
  var visualTestLoop;
  if (fabric.isLikelyNode) {
    visualTestLoop = global.visualTestLoop;
  }
  else {
    visualTestLoop = window.visualTestLoop;
  }
  var tests = [];
  function textpath1(canvas, callback) {
    var circlePath = new fabric.Path('M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0');
    var text = new fabric.Text('Hello this is a test of text on a path', {
      path: circlePath,
      fontSize: 24,
    });
    canvas.add(text);
    canvas.renderAll();
    callback(canvas.lowerCanvasEl);
  }

  tests.push({
    test: 'text on a circle path',
    code: textpath1,
    golden: 'textpath1.png',
    newModule: 'Text on paths',
    percentage: 0.09,
    width: 200,
    height: 200,
  });

  function textpath2(canvas, callback) {
    var path = new fabric.Path('M100 5 L 5 195 L 195 195 z');
    var text = new fabric.Text('wrapping with thigh corners it is what it is. Maybe one day it will look better', {
      left: 0,
      top: 0,
      fontSize: 16,
      fontFamily: 'Arial',
      paintFirst: 'stroke',
      strokeWidth: 2,
      strokeLineJoin: 'round',
      strokeLineCap: 'round',
      fill: 'blue',
      stroke: 'red',
      path: path,
      textBackgroundColor: 'yellow'
    });
    canvas.add(text);
    canvas.renderAll();
    callback(canvas.lowerCanvasEl);
  }

  tests.push({
    test: 'text on a triangle with background color',
    code: textpath2,
    golden: 'textpath2.png',
    percentage: 0.09,
    width: 200,
    height: 200,
  });

  function textpath3(canvas, callback) {
    var path = new fabric.Path('M -194 -109 C 538 -300 154 50 98 29');
    var text = new fabric.Text('Testing constant distance on bezier curve.', { path: path, top: 30, left: 30 });
    canvas.add(text);
    canvas.renderAll();
    callback(canvas.lowerCanvasEl);
  }

  tests.push({
    test: 'Textpath on a particular bezier',
    code: textpath3,
    golden: 'textpath3.png',
    percentage: 0.09,
    width: 610,
    height: 270,
  });

  function textpath4(canvas, callback) {
    var path = new fabric.Path('M 0 0 Q 180 0 180 -101.25 Q 180 -180 90 -180 Q 0 -180 0 -112.5 Q 0 -45 78.75 -45 Q 135 -45 146.25 -90');
    var text = new fabric.Text('Text on a swirl path with textAlign right', {
      left: 50,
      top: 50,
      fontSize: 28,
      textAlign: 'right',
      charSpacing: 50,
      path: path
    });
    canvas.add(text);
    canvas.renderAll();
    callback(canvas.lowerCanvasEl);
  }

  tests.push({
    test: 'textpath aligned right',
    code: textpath4,
    golden: 'textpath4.png',
    percentage: 0.09,
    width: 300,
    height: 300,
  });

  tests.forEach(visualTestLoop(QUnit));
})();
