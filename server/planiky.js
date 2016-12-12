if (typeof require !== 'undefined') {
    XLSX = require('xlsx');
    fs = require('fs');
}

const inputFolder = './input/';

var counts = {};
var countsArray = [];

function getCounts(resolve) {
    fs.readdir(inputFolder, (err, files) => {
        files.forEach(file => {
            const workbook = XLSX.readFile(inputFolder + file);

            const zapad = workbook.Sheets[workbook.SheetNames[0]];
            const stred = workbook.Sheets[workbook.SheetNames[1]];

            count(zapad);
            count(stred);
        })
        resolve(Object.keys(counts).map((data) => [data, counts[data]])
          .filter((i) => i[0] != "undefined" && !i[0].match(/[0-9/]/)).sort((a, b) => (a[1] > b[1])
            ? -1
            : ((b[1] > a[1])
                ? 1
                : 0)));
    })
}

function count(sheet) {
    for (cell in sheet) {
        if (cell[0] == 'A' || cell[0] == 'B' || ((cell[1] == 1 || cell[1] == 2 || cell[1] == 3 ) && cell[2] == undefined))
          continue;
        if ((sheet[cell].v) in counts) {
            counts[sheet[cell].v]++;
        } else {
            counts[sheet[cell].v] = 1;
        };
    }
}

module.exports = new Promise((resolve, reject) => {
  getCounts(resolve);
})
