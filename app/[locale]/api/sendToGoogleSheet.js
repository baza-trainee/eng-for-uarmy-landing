import axios from 'axios';
console.log(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL, "process.env.GOOGLE_SHEET_URL");
axios.defaults.baseURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

export const sendToGoogleSheet = async (formData ) => {
    try {
        const { data } = await axios.post('', formData);
        console.log('response', data.result);
    
        return data;
    } catch (error) {
        console.log('error', error);
    }
};