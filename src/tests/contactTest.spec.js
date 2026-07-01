import {test} from "@playwright/test";
import cdata from "../testdata/contacts.json";
import logger from "../utils/LoggerUtil";
import {convertCsvFileToJsonFile} from "../utils/CsvtoJsonUtil";

for(const contact of cdata){
    test.skip(`Data Driven test for ${contact.name}`, async({page}) => {
        console.log(contact);
    })
}

test.skip('csv to json', async({page}) => {
    convertCsvFileToJsonFile('data.csv','datademo.json')
})