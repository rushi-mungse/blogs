import Link from "next/link"
import { useRouter } from "next/router"
import { ICategory } from "../types"
import Image from 'next/image'

interface IPropsTypes {
    categories : ICategory[];
    handleSearch : (e : string) => void;
}

const Tabs = ({categories, handleSearch} : IPropsTypes) => {
    const router = useRouter();
    const isActiveLink = (category : ICategory) : boolean => {
        return router.query.category === category.attributes.slug;
    }

    return (
        <div className="flex items-center justify-between my-4 border-b-2 border-b-gray-200">
            <ul className="flex items-center">
                <li  className={"p-4 mr-4 border-b-4 rounded-sm duration-75 transition-all" + `${router.pathname === "/" ? " border-primary text-primary" : " border-b-white"}`}><Link href={'/'}>Recent</Link></li>
                {
                    categories.map(category => {
                        return <li key = {category.id} className={"p-4 mr-4 rounded-sm border-b-4 duration-75 transition-all"+ `${isActiveLink(category) ?  " border-primary text-primary" :  " border-b-white"}`} > <Link href={`/categories/${category.attributes.slug}`}>{category.attributes.title}</Link> </li>;
                    })
                }
            </ul>
            <div className="flex items-center justify-center">
                <Image src = "/search.png" height={20} width={20} />
                <input type="text" onChange = {(e) => handleSearch(e.target.value)} placeholder="search blogs" className="ml-2 outline-none w-[100px]"/>
            </div>
        </div>
  )
}

export default Tabs