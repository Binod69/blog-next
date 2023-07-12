import Link from 'next/link';
import ThemeBtn from '../ThemBtn/ThemeBtn';

const Navbar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href={'/'}>
            <h1 className="text-2xl font-medium">
              My <span className="text-teal-500">Blog</span>
            </h1>
          </Link>
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
