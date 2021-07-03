window.addEventListener("keydown", function (e) {
	const key = document.querySelector(`.key[data-key="${ e.key }"]`);
	if (!key)
		return;
	let sound = key.textContent.substring(1);
	sound = sound.substring(sound.indexOf("\n"));
	sound = sound.substring(5);
	sound = sound.substring(0, sound.indexOf("\n"));
	console.log(sound.length)
	for (let i = 0; i < sound.length; i++)
		console.log(i, sound[i]);
	const audio = new Audio(`Audio/${ sound.toLowerCase() }.wav`)
	audio.play();
});