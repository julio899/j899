"use strict";
function tag(... x) {
    if(x.length > 1) {
        return validate(x);
    }
    return d(x); // default
}

function validate(x)
{   
    switch(x[1])
    {
        case 'info':
            info(x);
        break;
        case 'success':
            success(x);
        break;        
        default:
            d(x[0]); 
        break;           
    }
}

function d(x) {
    console.log("%c "+x+" %c default","background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px","background-color:#777777;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
}
function info(x) {
    if(x.length === 2)
    {
        console.log("%c " + x[0] + " %c info","background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px","background-color:#54a3ff;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
    } else if( x.length > 2) {
        console.log("%c " + x[0] + " %c " + x[2],"background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px","background-color:#54a3ff;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
    }
}
function success(x) {
    if(x.length === 2)
    {
        console.log("%c " + x[0] + " %c success","background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px","background-color:#4BC51D;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    }else if( x.length > 2) {
        console.log("%c " + x[0] + " %c " + x[2],"background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px","background-color:#4BC51D;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    }
}
module.exports = tag;