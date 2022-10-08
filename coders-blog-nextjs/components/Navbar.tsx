import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-4 flex items-center justify-between">
      <Link href={'/'} >
        <div className="flex items-center cursor-pointer">
            <Image src={"/logo.png"} width={500 / 12} height={431 / 12} />
            <h1 className="text-primary ml-3 text-lg font-bold">Coder's Blog</h1>
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <button className="px-3 py-[2px] mr-4  bg-white border border-black cursor-pointer hover:bg-gray-400 hover:border-gray-400 transition-all duration-75">
          Log In
        </button>
        <button className="px-3 py-[2px] bg-primary border border-primary cursor-pointer hover:bg-primary-dark hover:border-primary-dark transition-all duration-75">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
