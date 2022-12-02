import Image from "next/image"
import Link from "next/link"
import { IArticle } from "../types"
import {dateFormate} from '../utils'

interface TPropsTypes {
    articles : IArticle[]
}

const ArticlesList = ({articles} : TPropsTypes) => {
  return (
    <div className="contianer mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 gap-20">
        {
            articles.map(article => {
                return (
                <div key={article.id} className="mt-4">
                    <div>
                        <Link href={`/articles/${article.attributes.slug}`}>
                            <h1 className="font-bold text-xl decoration-clone duration-75 transition-all hover:underline cursor-pointer">{article.attributes.title}</h1>
                        </Link>
                        <div className="mt-2 flex items-center">
                            <Image src = {`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.url}`} height= {40} width= {40} className="rounded-md"/>
                            <div className="ml-2">
                                <span className="font-bold"> {article.attributes.author.data.attributes.username}</span> on
                                <span className="text-gray-400 ml-2 text-sm">{dateFormate(article.attributes.createdAt)}</span>
                            </div>
                        </div >
                        <p className="mt-4">{article.attributes.description.slice(0, 250)} {article.attributes.description.length > 250 ? "..." : ""}</p>
                    </div>
                </div>
                );
            })
        }

    </div>
  )
}

export default ArticlesList