import axios from 'axios';
import { BASE_URL } from '../utils/limitProducts';

export const createProducts = async (
  id,
  title,
  img,
  price,
  category,
  stock,
  currentUser
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/products`,
      {
        id,
        title,
        img,
        price,
        category,
        stock
      },
      {
        headers: {
          'x-token': currentUser.token,
        },
      }
    );
    alert('Producto creado correctamente');
    return response.data;
  } catch (err) {
    console.log(err);
    return alert(err.response.data.msg);
  }
};