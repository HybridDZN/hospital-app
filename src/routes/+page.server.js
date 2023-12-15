//import { PB_COLLECTION } from "$lib/static/private";
import pb from "$lib/server/pb.js";
const PB_COLLECTION = "hospital_documents"; // FIXME: Why can't I assign this from the .env?
export async function load(){
    const { items: documents } = await pb.collection(PB_COLLECTION).getList();
    let output = {};
    for (let document of documents){
        if (!output[document.category]){
            output[document.category] = [];
        }
        const truncatedName = document.file.substring(0, document.file.lastIndexOf('_'));
        output[document.category].push({
            name : truncatedName,
            id : document.id
        });
    }
    output = {files:output};
    return output.files;
}
