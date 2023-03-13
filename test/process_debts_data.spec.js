const { expect } = require('chai');
const fs = require('fs');
const csv = require('csv-parser');

describe('Debts data processing', () => {
    it('Check that every data row is in CSV data format', async () => {
        fs.createReadStream('test-data.csv')
            .on('error', function (error) {
                console.log('Error reading file, please check the file name ' + error);
            })
            .pipe(csv())
            .on('data', function (row) {
                expect(row.Debtor).to.be.a('string');
                expect(row.Creditor).to.be.a('string');
                expect(parseFloat(parseFloat(row.Amount).toFixed(2))).to.be.a('number');
            });
    });
});