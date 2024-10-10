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
  const responseSearch = await HttpAxiosResponse.get('everything',{
    params:{
      q:value,
      language:'es'
    }
  });
  return responseSearch.data.articles;
};
