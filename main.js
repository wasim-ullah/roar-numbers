var demoText;
var app;

setupDemo();

// Fullscreen in pixi is resizing the renderer to be window.innerWidth by window.innerHeight
window.addEventListener("resize", function() {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

// Create some text. Not important for fullscreen
function setupDemo() {
  app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    // backgroundColor: 0xcccccc
    transparent: true
  });
  document.body.appendChild(app.view);
  // Create some text that we can update
  createText();
  // Update the text every pixi frame or 'tick'
  app.ticker.add(updateText);
}

// Demo-specific, replace or factor out
function createText() {
  var style = { fontFamily: "Helvetica, sans-serif", fontSize: "10vw", fill: 'blue' };
  demoText = new PIXI.Text("0", style);
  //stage.addChild(demoText);
  app.stage.addChild(demoText);
}

// Put new text in the text box
function updateText(delta) {
  var msg = Number(demoText.text) + 1; // tricks
  demoText.setText(msg);
  // center text
  demoText.x = app.renderer.width / 2 - demoText.width / 2;
  demoText.y = app.renderer.height / 2 - demoText.height / 2;
}
