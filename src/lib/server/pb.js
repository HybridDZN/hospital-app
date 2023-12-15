import { PB_IP } from "$env/static/private";
import PocketBase from 'pocketbase';
export default new PocketBase(PB_IP);