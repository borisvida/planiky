if (typeof require !== 'undefined') {
    XLSX = require('xlsx');
    fs = require('fs');
}

const inputFolder = './input/';

let counts = {};
let countsArray = [];

function getCounts() {
    fs.readdir(inputFolder, (err, files) => {
        files.forEach(file => {
            const workbook = XLSX.readFile(inputFolder + file);

            const zapad = workbook.Sheets[workbook.SheetNames[0]];
            const stred = workbook.Sheets[workbook.SheetNames[1]];

            count(zapad);
            count(stred);
        })
        countsArray = Object.keys(counts).map((data) => [data, counts[data]])
          .filter((i) => i[1] > 1 && i[0] != "undefined" && !i[0].match(/[0-9/]/)).sort((a, b) => (a[1] > b[1])
            ? -1
            : ((b[1] > a[1])
                ? 1
                : 0));
    })
}

function count(sheet) {
    for (cell in sheet) {
        if ((sheet[cell].v) in counts) {
            counts[sheet[cell].v]++;
        } else {
            counts[sheet[cell].v] = 1;
        };
    }
}
getCounts();
module.exports = new Promise((resolve, reject) => {
    resolve(console.log(countsArray))
});
