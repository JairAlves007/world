const world = document.getElementById("world");
const worldQuality = document.getElementById("world-quality");

function handleChangeQuality(event) {
	const quality = event.currentTarget.value;

	if (quality.trim().length <= 0) {
		world.style.display = "none";
		return;
	}

	world.style.display = "block";
	world.src = `./assets/${quality}.png`;
}

worldQuality?.addEventListener("change", handleChangeQuality);
