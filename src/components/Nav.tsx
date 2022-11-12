import Link from "next/link";

const Nav = (): any => {
    return (
  <nav className="w-full flex justify-end p-2 bg-black">
    <Link href="/api/auth/signin">
      <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 duration-300">
        Login
      </button>
    </Link>
        </nav>
    )
};

export default Nav;
