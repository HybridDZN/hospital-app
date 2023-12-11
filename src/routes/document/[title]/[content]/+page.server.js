import s3 from "$lib/server/s3.js";
import * as path from 'path';
const bucket = "hospital-documents";
export async function load({params: {title, content}}){
    const document = await s3.getObject({
        Bucket: bucket,
        Key: `${title}/${content}`
    })
    const documentString = Buffer.from(await document.Body.transformToByteArray()).toString("base64");
    return { documentString };
}