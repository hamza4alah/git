var inpt_global;
var vali_global;
function addVali(inptId, valiId) {
	'use strict';
	inpt_global = document.getElementById(inptId);
	vali_global = document.getElementById(valiId);
	if (inpt_global.value === "") {
		vali_global.classList.remove("hide-vali");
	}
}
function hideVali(valiId) {
	'use strict';
	vali_global.classList.add("hide-vali");
}