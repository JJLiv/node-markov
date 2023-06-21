/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const process = require("process");
const markov = require("./markov");


function genMarkovText(text){
    let mm = markov.MarkovMachine(text);
    let createdText = mm.makeText();
    console.log(createdText);
    
};


function readFileCreateText(filePath){
    fs.readFile(path, 'utf8', function(err, data) {
        if(err){
            console.log(`ERROR --> ${err}`);
            process.exit(1);
        } else {
            genMarkovText(data)
            console.log("SUCCESS");
        }
    });
};



async function readUrlCreatText(url) {

    try {
    let resp = await axios.get(url);
    } catch (err) {
        console.log(`ERROR --> ${err}`);
        process.exit(1);
    }
    genMarkovText(resp.data);

}


let typePath = process.argv[2];
let path = process.argv[3];

if (typePath === "file") {
    
    readFileCreateText(path);


} else if (typePath === "url") {

    readUrlCreatText(path);


} else {
    console.log(`ERROR -->  ???`)
    process.exit(1);
}