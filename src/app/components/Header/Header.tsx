import Image from "next/image";
import "./Header.scss";
import Link from "next/link";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <Link href="/" aria-label="Go to table of users">
        <Image
          alt="Fantasticfy logo"
          width="50"
          height="50"
          src="/images/logo-fantasticfy.webp"
        />
      </Link>
      <h1 className="header__title">Userfy</h1>
    </header>
  );
};

export default Header;
