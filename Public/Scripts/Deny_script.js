// @input Component.Label label
// @input Component.Label left
// @input Component.Label right

global.startCountDown();
script.right.outlineColor = new vec4(1.0, 0.0, 0, 1.0);
script.right.outlineSize = 1.0;
script.left.outlineSize = 0.0;
script.label.enabled = true;
script.label.text = "denied";
print("denied");
