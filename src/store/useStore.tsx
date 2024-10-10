import {getArticlesServices} from '@services/articles';
import {Article} from '@services/interfaces/articlesInterface';
import {getStoreArticles, setStoreArticles} from '@services/localStorage/LocalStore';
import {create} from 'zustand';

interface NewsArticles {
  articles: Article[];
  error: string;
  isLoading: boolean;
  isRefresh:boolean;
  isLoadingFooder:boolean;
  setIsRefresh:(value:boolean)=>void;
  getArticles: (
    page?: number,
    updateState?:boolean,
    showLoad?:boolean,
    category?:string
  ) => void;
}

export const useStore = create<NewsArticles>()(set => ({
  articles: [],
  error: '',
  isRefresh:false,
  isLoadingFooder:false,
  isLoading: true,
  setIsRefresh:(value)=>{set({isRefresh:value})},
  getArticles: async (page = 5,updateState,showLoad=true,category="") => {
   
    try {
        updateState
        ?set((state)=> ({error: '', isRefresh: true,isLoadingFooder:true}))
        :set((state)=> ({error: '', isLoading: showLoad,isLoadingFooder:true}));

      const response = await getArticlesServices(page,category);
      await setStoreArticles(response);

      updateState
      ?set((state) => ({articles: response,isRefresh: false,isLoadingFooder:false}))
      :set((state) => ({articles: response,isLoading: false,isLoadingFooder:false}));
    } catch (hasError) {
      console.log(hasError);

      const articlesStorage = await getStoreArticles();
      set((state) => ({
        articles:articlesStorage
        ? articlesStorage
        :[],
        error: 'Ocurrio unerror',
        isRefresh: false,
        isLoading: false,
        isLoadingFooder:false
      }));
    
    } finally{
      set((state) => ({
        isRefresh: false,
        isLoading: false,
        isLoadingFooder:false,
      }));
    }
  },
}));


