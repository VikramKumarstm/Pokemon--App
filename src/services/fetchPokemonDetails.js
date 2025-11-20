import axiosInstance from '../helpers/axiosInstance'

export async function fetchPokemonDetails({id}) {
    try {

        const response = await axiosInstance.get(`/pokemon/${id}`)
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}