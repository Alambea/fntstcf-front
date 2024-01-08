import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo-fantasticfy.webp";
import { paths } from "../../routers/paths";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header__brand-container">
        <Link href={paths.users} aria-label="Go to table of users">
          <Image alt="Fantasticfy logo" width="50" height="50" src={logo} />
        </Link>
        <span className="header__title">Userfy</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
