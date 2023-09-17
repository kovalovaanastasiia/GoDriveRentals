import axios from 'axios';


const URL = 'https://6496e6dd83d4c69925a33840.mockapi.io/car_adverts';
export const getAllCars = async () => {
  const {data} = await axios.get(URL);
  return data;
};
