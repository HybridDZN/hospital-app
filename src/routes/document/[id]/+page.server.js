import pb from "$lib/server/pb.js"
// import { PB_COLLECTION } from "$lib/static/private"
const PB_COLLECTION = "hospital_documents";
export async function load({params: { id }}){
    const currentFileDetails = await pb.collection(PB_COLLECTION).getOne(id);
    const url = pb.files.getUrl(currentFileDetails, currentFileDetails.file);
    return { url };
}