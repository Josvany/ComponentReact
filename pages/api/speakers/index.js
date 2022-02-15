// import { data } from "../../../SpeakerData"; // usado para archivo estatico
import path from "path";
import fs, { read } from "fs";

const {promisify} = require("util");
const readFile = promisify(fs.readFile);

const delay = (ms) => new Promise((resolve) => {setTimeout(resolve, ms)});


export default async function handler(req, res)
{
    // res.status(200).send(JSON.stringify(data, null , 2)); // archivo estatico 

    const jsonFile = path.resolve("./", "db.json");
    try 
    {
        const readFileData = await readFile(jsonFile);
        await delay(2000);
        const speakers = JSON.parse(readFileData).speakers;
        if (speakers) 
        {
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(speakers, null , 2));
            
        }
    } 
    catch (error) 
    {
        console.log("/api/speakers error", error);
        res.status(404).send("File not found on server");
    }
}