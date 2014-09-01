$( document ).ready(function() {

	//load audio
    lowLag.init({'urlPrefix':'samples/'});
	lowLag.load(['bass.wav'],'bassPlay');
	lowLag.load(['hhc.wav'],'highPlay');
	lowLag.load(['hho.wav'],'highOPlay');
	lowLag.load(['snare.wav'],'snarePlay');

	var context;
	var bufferLoader;
	var notes = [];
	var bass;
	var high;
	var source = [];
	var beat_position = 0; 

	function playNote(b,c) {
		if (b == true) {
			//console.log("Button click:"+b);
			lowLag.play(c);
		}
	} 

	//dat.gui
	window.BPM = 120;
	//window.Filter = 0;
	window.Play = function() { stop = false, console.log('play') };
	window.Stop = function() { stop = true, beat_position = 0, console.log('stop') };
	window.back = [ 200, 200, 200 ];
	window.textC = [ 0, 0, 0];

	window.onload = function() {
	var gui = new dat.GUI();
	gui.add(window, 'BPM', 20, 300);
	//gui.add(window, 'Filter', -1000, 1000);
	gui.add(window, 'Play');
	gui.add(window, 'Stop');
	gui.addColor(window, 'back');
	gui.addColor(window, 'textC');
	};

});