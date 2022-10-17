import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const isActiveLink = (categories: string) =>
    category === categories
      ? " text-primary after:contents-[''] after:w-[100%] after:h-[4px] after:rounded-md after:bg-primary after:absolute after:bottom-[-10px] after:left-0 transition-all duration-100"
      : "";

  return (
    <>
      <nav className="mt-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer">
            <Image src={"/logo.png"} width={500 / 12} height={431 / 12} />
            <h1 className={"text-primary ml-3 text-lg font-bold"}>
              Coder's Blog
            </h1>
          </div>
        </Link>
        <div className="flex items-center justify-center">
          <button className="px-3 py-[2px] mr-4  bg-white border border-black cursor-pointer hover:bg-gray-400 hover:border-gray-400 transition-all duration-75">
            Log In
          </button>
          <button className="px-3 py-[2px] bg-primary-dark border border-primary-dark cursor-pointer hover:bg-primary hover:border-primary transition-all duration-75">
            Sign Up
          </button>
        </div>
      </nav>
      <nav className="mt-8 flex items-center flex-col">
        <ul className="flex items-center w-[100%] mb-2">
          <li className="pl-4 list-none">
            <div className="relative">
              <Link href={"/categories/recent"}>
                <span
                  className={
                    "cursor-pointer font-bold" + `${isActiveLink("recent")}`
                  }
                >
                  Recent
                </span>
              </Link>
            </div>
          </li>
        </ul>
        <hr className="h-[2px] w-[100%] bg-gray-200 " />
      </nav>
    </>
  );
};
