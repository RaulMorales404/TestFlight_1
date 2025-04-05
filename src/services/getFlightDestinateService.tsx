// src/services/postService.ts
import { Endpint } from '@api/endPoints';
import axios from 'axios';

export const getFlightDestinateService = async (
  origin: string,
  Destination: string,
) => {

    try {
        const response = await axios.get(Endpint.DESTINATE_API_URL_GET);
        return response.data;
      } catch (error) {
        throw new Error('Error al obtener el post');
      }

};
