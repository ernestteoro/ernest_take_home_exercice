const { makeSummary } = require('./process_debts_data');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter the file name: ', filename => {
    makeSummary(filename);
});
