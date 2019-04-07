var arg2 = 0, key = 0, division = 0, act, arg1 = 0;

function clikButon(key) {
    if (key >= '0' && key <= '9') {
        if (division == '0') arg2 = arg2 * 10 + key;
        else {
            arg2 = arg2 + division * key;
            division = division * 0.1;
        }
        displey();
    }
    if (key == '10') {
        arg1 = 0;
        division = 0;
        arg2 = 0;
        act = 0;
        displey();
    }
    if (key >= '11' && key <= '14' && arg1 == '0') {
        arg1 = arg2;
        arg2 = 0;
        displey();
        act = key;
        division = 0;
    }
    if (key >= '16' && key <= '18' && arg1 == '0') {
        if (key == '16') division = 0.1;
        if (key == '17') {
            arg2 = -arg2;
            displey();
        }
        if (key == '18') {
            arg2 = arg2 * arg2;
            displey();
        }
    }

    if (key == '15' && arg2 != '0') {
        if (act == '11') {
            arg2 = arg1 + arg2;
            displey();
            arg1 = 0;
            division = 0;
            act = 0;
        }
        if (act == '12') {
            arg2 = arg1 - arg2;
            displey();
            arg1 = 0;
            division = 0;
            act = 0;
        }
        if (act == '13') {
            arg2 = arg1 * arg2;
            displey();
            arg1 = 0;
            division = 0;
            act = 0;
        }
        if (act == '14') {
            arg2 = arg1 / arg2;
            displey();
            arg1 = 0;
            division = 0;
            act = 0;
        }
        //    arg1=0; division=0; arg2=0; act=0;
    }
}

function displey() {
    document.Calc.argLabel1.value = arg2;
}
