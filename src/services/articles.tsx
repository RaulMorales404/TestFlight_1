import HttpAxiosResponse from '@api/axios';
import {Articles} from './interfaces/articlesInterface';

export const getArticlesServices = async (pageSize:number) => {
  const responseArticles = await HttpAxiosResponse.get<Articles>(
    'top-headlines',
    {
      params: {
        language:'en',
        pageSize,
        country: 'us', 
        
      },
    },
  );
  return responseArticles.data.articles;
};


export const searchArticlesServices = async (value: string) => {
  const responseSearch = await HttpAxiosResponse.get(`everything?q=${value}`);
  return responseSearch.data.articles;
};
