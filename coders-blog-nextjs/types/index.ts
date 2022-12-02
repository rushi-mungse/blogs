
import {MDXRemoteSerializeResult} from 'next-mdx-remote'
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  title: string;
  slug: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IArticleImage {
  data : {
    attributes : {
      url : string;
    }
  }
}

export interface IAuthor {
  data : {
    attributes : {
      username : string;
      avatar : {
        data : {
          attributes : {
            url : string;
          }
        }
      }
    }
  }
}
export interface IArticleAtributes{
  title : string;
  slug : string;
  body : string | MDXRemoteSerializeResult;
  description : string;
  createdAt : string;
  image : IArticleImage;
  category : {
    data : ICategory;
  }
  author : IAuthor;
}
export interface IArticle {
  id : number;
  attributes : IArticleAtributes;
}