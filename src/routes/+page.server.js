import s3 from "$lib/server/s3.js";
import { pbkdf2 } from "crypto";
import PocketBase from 'pocketbase';
const bucket = "hospital-documents";
const collection = "hospital_documents";
const pb = new PocketBase('http://127.0.0.1:8090/');

export async function load(){
    //list all items
    // TODO: Pass this through in the same foramat as S3 api call. Append the URL as part of the object
    const { items: documents } = await pb.collection(collection).getList();
    let output = {};
    for (let document of documents){
        const { id } = document;
        const currentFileDetails = await pb.collection(collection).getOne(id);
        const { file: fileName, category } = currentFileDetails;
        const url = pb.files.getUrl(currentFileDetails, fileName);
        const truncatedName = fileName.substring(0, fileName.lastIndexOf('_'));
        if (!output[category]){
            output[category] = [];
        }
        output[category].push({
            name: truncatedName,
            url: url
        });
    }
    output = {files:output};
    console.log(output);
    return output.files;
}

// S3 file getter(?)
// export async function load(){
//     const objects = await s3.listObjects({
//         Bucket: bucket,
//     });

//     let files = objects.Contents;
//     let output = {};

//     for (let item of files){
//         let path = item.Key.split("/");
//         let fileName = path[path.length-1];
//         let folder = path[0];

//         if (!output[folder]) {
//             output[folder] = [];
//         }

//         output[folder].push(fileName);
//     }
//     output = {files:output}
//     return output.files;
// }
