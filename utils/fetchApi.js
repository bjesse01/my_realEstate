
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '96ce62f099msh47085359a9aa08dp1f5d66jsn398e228d444c',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}