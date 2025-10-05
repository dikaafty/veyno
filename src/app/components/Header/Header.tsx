import Image from "next/image";
import Navbar from "./Navbar";
import AddTransaction from "./AddTransaction";
import ProfileHeader from "./ProfileHeader";

const Header = () => {
  return (
    <header className="py-5 px-12 flex justify-center md:justify-between items-center">
      <div className="flex-center flex-col md:flex-row gap-6 md:gap-2">
        <Image 
          src="/images/veyno-logo.png"
          width={42}
          height={42}
          alt="Veyno logo"
          priority
        />

        <Navbar />

        <AddTransaction />
      </div>

      <ProfileHeader />
    </header>
  )
}

export default Header;