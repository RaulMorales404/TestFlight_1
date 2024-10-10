import HttpAxiosResponse from '@api/axios';
import {Articles} from './interfaces/articlesInterface';

export const getArticlesServices = async (pageSize: number,category: string) => {
  
  const paramsConfig = {
    pageSize,
    country: 'us',
  };
  

  const config = category
    ? {...paramsConfig,category}
    : {...paramsConfig};
console.log(config)
  const responseArticles = await HttpAxiosResponse.get<Articles>(
    'top-headlines',
    {
      params: {
        ...config,
      },
    },
  );
  return responseArticles.data.articles;
};

export const searchArticlesServices = async (value: string) => {
  const responseSearch = await HttpAxiosResponse.get(`everything?q=${value}`);
  return responseSearch.data.articles;
};
