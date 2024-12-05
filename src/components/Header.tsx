import Image from "next/image";
import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className="header py-10 border-b border-b-black">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <Image src="/digify-logo.png" alt="Logo" width={180} height={180} />
          <nav>
            <ul className="flex space-x-5">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/signin"
            className="group bg-white relative inline-block text-sm font-medium text-black focus:outline-none rounded-lg"
          >
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>

            <span className="relative text-base font-semibold block border border-current bg-primary px-8 py-3 rounded-lg">
              {" "}
              Login
            </span>
          </Link>{" "}
        </div>
        {/* <Link href="/signup">
          <span className="link">Register</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
