import axios from 'axios';

export async function getProducts() {
  const response = await axios.get('http://localhost:3001/products');

  return response.data;
}
