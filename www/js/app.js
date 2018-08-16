window.onload = function () {
}

$("#fakeLoader").fakeLoader({
    timeToHide: 500,
    zIndex: "999",
    spinner: "spinner2",
    bgColor: "#2f2f2f",
    //imagePath: ""
});

timerID = setInterval('clock()',500);
moment.locale('ja');

function clock() {
    document.getElementById("view_date").innerHTML = getDate();
    document.getElementById("view_time").innerHTML = getTime();
}

function getDate() {
	var s = moment().format('L');
	return s;
}

function getTime() {
	var s = moment().format('LTS');
	return s;
}
