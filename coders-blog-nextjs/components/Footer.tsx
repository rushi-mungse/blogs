import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-[100%] py-4 bg-white">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <Link href={'/'} >
                    <div className="flex items-center cursor-pointer">
                        <Image src={"/logo.png"} width={500 / 12} height={431 / 12} />
                        <h1 className="text-black ml-3 text-lg font-bold">Coder's Blog</h1>
                    </div>
                </Link>
                <div className="ml-8 text-gray-600">
                    <span>&#169;2022 Coder's blog - @CodersGyan</span>
                </div>
            </div>
            <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-gray-500 cursor-pointer">
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 hover:fill-facebook transition-all"
                        viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer">
                    <svg
                        fill="currentColor" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 hover:fill-twitter transition-all"
                        viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500 cursor-pointer">
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5 hover:fill-linkedin transition-all"
                        viewBox="0 0 24 24">
                        <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer