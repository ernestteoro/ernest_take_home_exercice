const fs = require('fs');
const csv = require('csv-parser');
const math = require('mathjs');

// Variables daclaration
const debts = [];

// Make summary of monetary debts
makeSummary = (filename) => {

    // Read data from csv file and create an array
    fs.createReadStream(filename + `.csv`)
        .on('error', function (error) {
            console.log(error);
        })
        .pipe(csv())
        .on('data', function (row) {

            const debt = {
                debtor: row.Debtor,
                creditor: row.Creditor,
                amount: parseFloat(row.Amount)
            }

            debts.push(debt);

            for (const dbt of debts) {
                let curentElIndex = debts.indexOf(dbt);
                for (let i = ++curentElIndex; i < debts.length; i++) {
                    if (dbt.debtor === debts[i].debtor && dbt.creditor === debts[i].creditor) {
                        debts[curentElIndex - 1].amount = math.round(dbt.amount + debts[i].amount, 2);
                        // Remove the matching element from debts array
                        debts.splice(i, 1);
                    }
                }
            }
        }).on('end', function () {
            writeDataToCSVFile(debts);
        });
}

// Write data to CSV file
writeDataToCSVFile = (debts) => {
    const filename = 'summarized_debts_data.csv';
    fs.writeFile(filename, exportSummarizedDataAsCSV(debts), err => {
        if (err) {
            console.log('Error writing data to csv file', err);
        } else {
            console.log(`saved as ${filename}`);
        }
    });
}

// Export data to CSV file
exportSummarizedDataAsCSV = (debtsData) => {
    const header = ["Debtor,Creditor,Amount"];
    const debtsRows = debtsData.map(debtsData =>
        `${debtsData.debtor},${debtsData.creditor},${debtsData.amount}`
    );
    return header.concat(debtsRows).join("\n");
}

// Export modules to be accessible by other functions
module.exports = {
    makeSummary
}