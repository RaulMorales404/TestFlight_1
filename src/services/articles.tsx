
import HttpAxiosResponse from "@api/axios"; 
import { Articles } from "./interfaces/articlesInterface";

 
 

 
export const getArticlesServices = async  ()  => {
    const responseArticles = await HttpAxiosResponse.get<Articles>('top-headlines');
    return responseArticles.data.articles;
   
}


