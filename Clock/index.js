const Hour = document.querySelector('.Hour-hand');
const Min = document.querySelector('.Min-hand');
const Sec = document.querySelector('.Second-hand');

function setDate () {
	const now = new Date();

	const second = now.getSeconds();
	const secondDegree = ((second / 60) * 360) + 90;
	Sec.style.transform = `rotate(${ secondDegree }deg)`;

	const min = now.getMinutes();
	const minDegree = ((min / 60) * 360) + ((second / 60) * 6) + 90;
	Min.style.transform = `rotate(${ minDegree }deg)`;

	const hour = now.getHours();
	const hourDegree = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
	Hour.style.transform = `rotate(${ hourDegree }deg)`;

	console.log(hour, min, second)
}
setInterval(setDate, 1000);

// setDate();