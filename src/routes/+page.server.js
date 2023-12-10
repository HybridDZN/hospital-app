import s3 from "$lib/server/s3.js";
const bucket = "hospital-documents"

export async function load(){
    const objects = await s3.listObjects({
        Bucket: bucket,
    });

    let files = objects.Contents;

    let output = {};

    for (let item of files){
        let path = item.Key.split("/");
        let fileName = path[path.length-1];
        let folder = path[0];

        if (!output[folder]) {
            output[folder] = [];
        }

        output[folder].push(fileName);
    }
    output = {files:output}
    return output.files;
}
