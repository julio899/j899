"use strict";
function inNumeration(typeN, dig) {
    typeN = typeN.toUpperCase();
    var usNumberFormat = new Intl.NumberFormat('en-US');
    var esNumberFormat = new Intl.NumberFormat('es-ES');
    var usNumber = usNumberFormat.format(dig); // "99,999,999.99"
    var esNumber = esNumberFormat.format(dig); // "99.999.999,99"
    // return typeN === 'ES'?esNumber:usNumber;
    var resp = usNumber;
    if (typeN === 'ES') {
        resp = esNumber;
    }
    if (typeN === 'LA') {
        resp = usNumber.replace(/\./gi, '*');
        resp = resp.replace(/,/gi, '#');
        resp = resp.replace(/#/gi, '.');
        resp = resp.replace(/\*/gi, ',');
    }
    return resp;
}
module.exports = inNumeration;
