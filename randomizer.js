var index;
var a = [];
var max = 0;

/**
 * Utils
 */
function fillArray(src, dest) {
	for (var i = 0; i < src.length; i++) {
		a[a.length] = src[i];
	}
}

function formatNum(n) {
	if(n < 10) {
		n = "00" + n;
	}
	else if (n < 100) {
		n = "0" + n;
	}
	return n;
}

/**
 * Initialize App
 */
(function() {
	fillArray(STD_SRC, a);
	max = a.length;
})();

/**
 * Primaries: Reset & Number Generation
 */
document.querySelector(".reset-button").addEventListener('click', function() {
	//x = Math.floor(Math.random() * 169);
	a.length = 0;
	fillArray(STD_SRC, a);
	max = a.length;
	document.getElementById("student-number").innerHTML = formatNum(0);
	document.querySelector(".name-output").innerHTML = "Who will be chosen?";
});

document.querySelector(".generate-button").addEventListener('click', function() {
	index = Math.floor(Math.random() * max);
	var num = a[index].num;
	var txt = a.splice(index,1)[0].name;

	document.getElementById("student-number").innerHTML = formatNum(num);
	document.querySelector(".name-output").innerHTML = txt;
	//console.log(txt + num);
	max--;
});
