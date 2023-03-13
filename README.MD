# Debts data summarization app

## Aim

This app takes in a `.csv` file as input that contains debts data.
Just like the example below

`debtor,creditor,amount

Alex,Beatrice,101.32

Beatrice,Alex,1.20

Carl,Alex,45

Carl,Beatrice,12.50

Alex,Beatrice,19.22

Beatrice,Carl,67.90

Carl,Beatrice,12.80

Carl,Alex,15.88

Beatrice,Carl,71.42

Beatrice,Alex,4.54

Beatrice,Carl,28.76`

And then generate a file containing the summarized debts data, just like the sample below.

`Debtor,Creditor,Amount

Alex,Beatrice,120.54

Beatrice,Alex,5.74

Beatrice,Carl,168.08

Carl,Alex,60.88

Carl,Beatrice,25.30`

## How does it work

#### To install dependencies

We are going to need these dependencies( mocha, chai, csv-parser, mathjs).

To install them run the command below to install them

`npm install`

#### Summarize Debts data

1. Copy the debts data file if it exists otherwise create the file called data.csv with all debts data in the root of the folder of the app.

* Make sure to add a header like `debtor,creditor,amount`
* There is already a file name _data.csv_

2. Run `node index` and then provide the name of the `.csv` file containing debts data to be processed when you are asked to.
3. After the app has run, a file named `summarized_debts_data.csv` is generated containing all summarized debts data

#### Run unit test

Run `npm run unittest` to run unit tests
