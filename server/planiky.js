if (typeof require !== 'undefined')
    XLSX = require('xlsx');
const workbook = XLSX.readFile('input/Planik_2016-4Q.xls');

const zapad = workbook.Sheets[workbook.SheetNames[0]];
const stred = workbook.Sheets[workbook.SheetNames[1]];

let counts = {};
count(zapad);
count(stred);

//for (name in counts) {
//if (counts[name] > 1)
//console.log(name + ": " + counts[name]);
//}

function count(sheet) {
    for (cell in sheet) {
        if ((sheet[cell].v) in counts) {
            counts[sheet[cell].v]++;
        } else {
            counts[sheet[cell].v] = 1;
        };
    }
}

let countsArray = Object.keys(counts).map((data) => [data, counts[data]]);

module.exports = countsArray
  .filter((i) => i[1] > 1 && i[0] != "undefined" && !i[0].match(/[0-9/]/))
  .sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));
