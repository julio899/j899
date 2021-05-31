"use strict";
function inNumeration(typeN, dig) {
    typeN = new String(typeN).toUpperCase();
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
        resp = ( resp.indexOf(',') == -1 )? new String(resp).concat(',00'): resp;
        resp = ((resp.indexOf(',') >= 0) && resp.split(',')[1].length<2)? new String(resp).concat('0'):resp;
        resp = new String(resp.split(',')[0]).concat(',').concat(resp.split(',')[1].substr(0,2)); 
    }

    return resp;
}
module.exports = inNumeration;
