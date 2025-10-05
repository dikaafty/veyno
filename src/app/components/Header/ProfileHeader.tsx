import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div 
      className="grid grid-cols-[repeat(2,_max-content)] grid-rows-2 items-center gap-x-3 select-none 
      cursor-pointer max-md:hidden"
    >
      <Image 
        src="/images/default-photo-profile.png"
        alt="photo profile"
        width={35}
        height={35}
        className="row-span-2 rounded-full outline-2 outline-white"
      />

      <p className="text-sm max-lg:hidden">
        Karl Heinz
      </p>
    </div>
  )
}

export default ProfileHeader;