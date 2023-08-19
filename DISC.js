var DiscModule = (function() {
	var d, i, s, c, d2, i2, s2, c2;
	
	function getScores() {
		d = i = s = c = 0;
		var inputs = document.getElementsByTagName("input");
		for (var count = 0, l = inputs.length; count < l; count++) {
			if (inputs[count].checked) {
				switch (inputs[count].value) {
					case "d-most": d++; break;
					case "i-most": i++; break;
					case "s-most": s++; break;
					case "c-most": c++; break;
					case "d-least": d--; break;
					case "i-least": i--; break;
					case "s-least": s--; break;
					case "c-least": c--; break;
				}
			}
		}
	}
	
	function calculateWeightedScores() {
		if (d >= 6) d2 = 7;
		else if (d >= -1) d2 = 6;
		else if (d >= -5) d2 = 5;
		else if (d >= -9) d2 = 4;
		else if (d >= -13) d2 = 3;
		else if (d >= -16) d2 = 2;
		else d2 = 1;
		
		if (i >= 8) i2 = 7;
		else if (i >= 5) i2 = 6;
		else if (i >= 2) i2 = 5;
		else if (i >= -1) i2 = 4;
		else if (i >= -4) i2 = 3;
		else if (i >= -8) i2 = 2;
		else i2 = 1;
		
		if (s >= 12) s2 = 7;
		else if (s >= 8) s2 = 6;
		else if (s >= 5) s2 = 5;
		else if (s >= 1) s2 = 4;
		else if (s >= -2) s2 = 3;
		else if (s >= -7) s2 = 2;
		else s2 = 1;
		
		if (c >= 6) c2 = 7;
		else if (c >= 3) c2 = 6;
		else if (c >= -1) c2 = 5;
		else if (c >= -3) c2 = 4;
		else if (c >= -7) c2 = 3;
		else if (c >= -11) c2 = 2;
		else c2 = 1;
	}
	
	function createCharts() {
		var total = 7;
		
		document.querySelector("#d-chart").style.width = (d2 / total * 100) + "%";
		document.querySelector("#i-chart").style.width = (i2 / total * 100) + "%";
		document.querySelector("#s-chart").style.width = (s2 / total * 100) + "%";
		document.querySelector("#c-chart").style.width = (c2 / total * 100) + "%";
	}
	
	function showResults() {
		document.querySelector("#d-score").innerHTML = d2;
		document.querySelector("#i-score").innerHTML = i2;
		document.querySelector("#s-score").innerHTML = s2;
		document.querySelector("#c-score").innerHTML = c2;
		document.querySelector("#scroll-down").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			getScores();
			calculateWeightedScores();
			createCharts();
			showResults();
		}
	};
})();

document.querySelector("#submit").onclick = function() {
	DiscModule.processForm();
};