import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  toggleMenu?: () => void;
}

export default function MenuItems({ toggleMenu }: MenuItemProps) {
  const pathname = usePathname();

  return (
    <>
      <Link href="/" onClick={toggleMenu}>
        <div
          className={`font-medium hover:text-orange-600 ${
            pathname === "/" ? "text-orange-700" : "text-gray-800"
          }`}
        >
          Home
        </div>
      </Link>
      <Link href="/about" onClick={toggleMenu}>
        <div
          className={`font-medium hover:text-orange-600 ${
            pathname === "/about" ? "text-orange-700" : "text-gray-800"
          }`}
        >
          About Us
        </div>
      </Link>
      <Link href="/products" onClick={toggleMenu}>
        <div
          className={`font-medium hover:text-orange-600 ${
            pathname === "/products" ? "text-orange-700" : "text-gray-800"
          }`}
        >
          Products
        </div>
      </Link>
      <Link href="/services" onClick={toggleMenu}>
        <div
          className={`font-medium hover:text-orange-600 ${
            pathname === "/services" ? "text-orange-700" : "text-gray-800"
          }`}
        >
          Services
        </div>
      </Link>
      <Link href="/teams" onClick={toggleMenu}>
        <div
          className={`font-medium hover:text-orange-600 ${
            pathname === "/teams" ? "text-orange-700" : "text-gray-800"
          }`}
        >
          Teams
        </div>
      </Link>
    </>
  );
}
