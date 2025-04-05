// src/services/postService.ts
import { Endpint } from '@api/endPoints';
import axios from 'axios';

export const getFlightNumberService = async (numberFlight:string) => {

    try {
        const response = await axios.get(Endpint.NUMBERFLIGHT_API_URL_GET);
        return response.data;

      } catch (error) {
        throw new Error('Error al obtener el post');
      }

};
