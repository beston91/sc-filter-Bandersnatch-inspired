// -----JS CODE-----

// @input Component.Label label

// script.self.enabled = true;
global.timerActive = false;

global.startCountDown = function() {
  if (!timerActive) {
    timerActive = true;
    var i = 10;
    var delayedEvent = script.createEvent("DelayedCallbackEvent");
    delayedEvent.bind(function(eventData) {
      print("delay is over");
      if (i >= 0) {
        script.label.text = "" + i;
        i -= 1;
        delayedEvent.reset(1);
      } else {
        script.label.text = "time's up!";
        timerActive = false;
      }
    });

    // Start with a 2 second delay
    delayedEvent.reset(1);
    print("delay has started");
  }
};
