const fs = require('fs'); //access to local file system
const process = require('process');
const axios = require('axios'); //import built in axios module

// read the file with the given path
// returns an array of urls from the txt file
function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if(err){
            // If you cannot read the file (FILENAME), end your script with an error printed to the console.
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            // splice the contents into an array.
            let str = data; 
            let arr = str.split("\n");

            webCat(arr);
        }
    });
}


//For each URL, a GET request to the URL and save the HTML in a new file.
async function webCat(arr){ 
 
    for (let i = 0; i < arr.length; i++){
        try{
            let url_content = await axios.get(arr[i]).then(function(resp) {
                return resp.data.slice(0, 100);
            });
            // save to file
        let temp_out = arr[i].split('/');
        let out = temp_out[2];

        writeFunc(url_content, out);
        }   
        catch(error) {

//console.log(arr.length);   
console.error(`Error fetching ${arr[i]}: ${error}`);
    }
}
};


function writeFunc(content, name){
    if (content){
        fs.writeFile(name, content, 'utf8', function(err){
            if (err){
                console.error(`Couldn't write ${name}: ${err}`)
                process.exit(1);
            }
            console.log(`New File: ${name} Created!`);
        });
    }
    else{
        console.error(`No Content ${name}: ${err}`);
    }  
}


cat(process.argv[2]);


/** 
            let result = axios.get(`${arr[1]}`).then(function(resp) {
                    console.log(resp.data.slice(0, 100), '...');
                });
            console.log(result.data);  
*/