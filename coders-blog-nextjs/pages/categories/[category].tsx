import Tabs from "../../components/Tabs"
import { GetServerSideProps } from "next"
import { AxiosResponse } from "axios"
import { ICollectionResponse, ICategory } from "../../types"
import {fetchCategories} from '../../http'

interface IPropsType {
  categories : {
    items : ICategory[]
  }
}

const category = ({categories} : IPropsType) => {
  return (
    <div>
      <Tabs  categories={categories.items}/>
    </div>
  )
}

export default category


export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =  await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
      },
    },
  };
};