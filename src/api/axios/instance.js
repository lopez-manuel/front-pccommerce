import axios from "axios";

const serverPC = 'http://192.168.16.115:3000';
const local = 'http://localhost:3000';

export const api = axios.create({
    baseURL: local
})