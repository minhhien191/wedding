var btn = $('#button');
btn.addClass('show');
var iframeElement   = document.querySelector('iframe');
var widget         = SC.Widget(iframeElement);
var is_play = 1

// Add event listener to play button
document.getElementById('button').addEventListener('click', function() {
  widget.toggle();
  if (is_play == 1){
    document.getElementById("play_pause").src="images/pause.png";
    is_play = 0
    console.log(is_play)
  }
  else {
    document.getElementById("play_pause").src="images/play.png";
    is_play = 1
    console.log(is_play)
  }
  });
