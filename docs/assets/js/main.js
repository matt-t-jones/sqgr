document.getElementById("current").checked = true;
switchMap("current");

function switchMap(map) {
	const buttons = document.getElementsByClassName("buttons");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.display = "none";
	}
	document.getElementById("buttons_" + map).style.display = "flex";

    document.getElementById(map + "_bg").style.opacity = "1";
    const bg_divs = ["current_bg","april2021_bg","october2020_bg","june2020_bg"];
    for (let i = 0; i < bg_divs.length; i++) {
        if (!((map + "_bg") === bg_divs[i])) {
            document.getElementById(bg_divs[i]).style.opacity = "0";
        }
    }

    // const newBackground = "url('./assets/img/" + map + ".jpg')";
    // const tempDiv = document.getElementById("bg-div");
    // tempDiv.style.cssText = `
    //     background-image: ${newBackground};

    // `;

    // tempDiv.offsetWidth;
}