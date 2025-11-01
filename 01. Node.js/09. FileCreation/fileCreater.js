import readline from "readline";
import fs from 'fs'
import { stdin, stdout } from "process";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const fileCreation = () => {
    rl.question("Enter your file name : ", (filename) =>{
        rl.question("Enter the content for the file : ", (content)=> {
            fs.writeFile(`${filename}.txt`, content, (error) => {
                if(error){
                    console.error("Error while writing the file");
                }else{
                    console.log(`File "${filename}.txt" created successfully!`);
                }
            })
        })
    })
}

fileCreation();