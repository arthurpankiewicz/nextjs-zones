import Link from "next/link";

function Header() {
  return (
    <nav>
      <Link href="../">
        <a>Home</a>
      </Link>
      <Link href="../shopping">
        <a>Shopping</a>
      </Link>
      <Link href="../marketing">
        <a>Marketing</a>
      </Link>
    </nav>
  );
}

export default Header;
