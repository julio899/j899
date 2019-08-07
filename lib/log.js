"use strict";
function log(... x) {
	x.forEach((obj)=>{
		console.log(obj);
	});
}
module.exports = log;