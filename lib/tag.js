"use strict";
function tag(...x) {
    if (x.length > 1) {
        return validate(x);
    }
    return d(x); // default
}

function validate(x) {
    switch (x[1]) {
        case 'info':
            info(x);
            break;
        case 'success':
            success(x);
            break;
        case 'warning':
            warning(x);
            break;
        case 'danger':
            danger(x);
            break;
        case 'gold':
            gold(x);
            break;
        default:
            d(x[0]);
            break;
    }
}

function d(x) {
    console.log("%c" + x + " %cdefault", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#777777;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
}
function info(x) {
    if (x.length === 2) {
        console.log("%c" + x[0] + " %cinfo", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#54a3ff;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
    } else if (x.length > 2) {
        console.log("%c" + x[0] + " %c" + x[2], "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#54a3ff;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;");
    }
}
function success(x) {
    if (x.length === 2) {
        console.log("%c" + x[0] + " %csuccess", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#4BC51D;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    } else if (x.length > 2) {
        console.log("%c" + x[0] + " %c" + x[2], "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#4BC51D;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    }
}
function warning(x) {
    if (x.length === 2) {
        console.log("%c" + x[0] + " %cwarning", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#D3AB1F;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    } else if (x.length > 2) {
        console.log("%c" + x[0] + " %c" + x[2], "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#D3AB1F;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    }
}
function danger(x) {
    if (x.length === 2) {
        console.log("%c" + x[0] + " %cdanger", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#cb553f;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    } else if (x.length > 2) {
        console.log("%c" + x[0] + " %c" + x[2], "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background-color:#cb553f;padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;")
    }
}
function gold(x) {
    if (x.length === 2) {
        console.log("%c" + x[0] + " %c  ", "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background: rgba(252,234,187,1);background: -moz-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(252,234,187,1)), color-stop(50%, rgba(252,205,77,1)), color-stop(51%, rgba(248,181,0,1)), color-stop(100%, rgba(251,223,147,1)));background: -webkit-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -o-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -ms-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: linear-gradient(135deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93', GradientType=1 );padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;text-shadow: #000 0px 1px 1px;")
    } else if (x.length > 2) {
        console.log("%c" + x[0] + " %c" + x[2], "background-color:#565656;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding-right:4px", "background: rgba(252,234,187,1);background: -moz-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(252,234,187,1)), color-stop(50%, rgba(252,205,77,1)), color-stop(51%, rgba(248,181,0,1)), color-stop(100%, rgba(251,223,147,1)));background: -webkit-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -o-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: -ms-linear-gradient(-45deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);background: linear-gradient(135deg, rgba(252,234,187,1) 0%, rgba(252,205,77,1) 50%, rgba(248,181,0,1) 51%, rgba(251,223,147,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93', GradientType=1 );padding:0 4px;color:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;text-shadow: #000 0px 1px 1px;")
    }
}
module.exports = tag;