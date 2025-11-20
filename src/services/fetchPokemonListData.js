import axiosInstance from '../helpers/axiosInstance'

export async function fetchPokemoneListData({ offset }) {
    const limit = 10;
    try {

        const response = await axiosInstance.get(`/pokemon/?offset=${offset}&limit=${limit}`)
        return response.data;
        
    } catch (error) {

        console.error(error);
        return null;
        
    }
}