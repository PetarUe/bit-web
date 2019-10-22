var e = 2;
var a = [4, 6, 2, 8, 2, 2];
for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i];
    }
}
console.log(a);


var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = [];

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length] = a[i];
    }
}
console.log(b);


var a = [2, -2, 33, 12, 5, 8];
var b = [];
var e = 78;
var p = 3;

if (p <= a.length) {
    for (var i = 0; i < a.length; i++) {

        if (i < p) {
            b[b.length] = a[i];
        }
        if (i === p) {
            break;
        }
    }

    b[p] = 78;
    for (p = b.length; p < a.length + 1; p++) {
        b[p] = a[i];
        i++;
    }
    console.log(b)
} else {
    console.log("ERROR");
}

//drugi nacin

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;

if (p < a.length) {
    for (i = a.length; i > p; i--) {
        a[i] = a[i - 1];
    }

    a[p] = e;
    console.log(a);
} else
    console.log("ERROR!")


var a = '****'
for (var i = 0; i < 4; i++) {
    console.log(a)
}


var row = "";
var size = 10;

for (var i = 0; i < size; i++) {
    row += '* '
}
for (i = 0; i < size; i++) {
    console.log(row)
}

/* 
*
**
***
*/
var size = 4;         ///EVO GA
var row = "";
var result = "";

for (var i = 0; i < size; i++) {
    row += "* ";
    result += row + "\n";
}
console.log(result);
