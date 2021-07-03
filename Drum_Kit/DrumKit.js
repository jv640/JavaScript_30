let count = 0;
function removeTransition (e) {
	if (e.propertyName !== "transform") return;
	// console.log(e)
	this.classList.remove("playing");
	// count = count - 1;
	// console.log(count)

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


window.addEventListener("keydown", function (e) {
	const key = document.querySelector(`.key[data-key="${ e.key }"]`);
	if (!key)
		return;

	key.classList.add("playing");
	// count = count + 2;
	// console.log(count)

	let sound = key.getElementsByClassName("sound")[0].innerHTML;
	// console.log(sound)

	const audio = new Audio(`Audio/${ sound.toLowerCase() }.wav`);
	audio.play();
});