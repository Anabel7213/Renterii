"use client";

import Title, { Logo } from "./ui/title";

export default function Users() {
  return (
    <div className="flex text-center flex-col justify-center items-center md:m-8 sm:mx-4 sm:my-8 gap-4">
      <Title width="max-w-[800px]" subtitle="Renterii users" uppercase={true} firstOf="Join the 20,000+ locals and businesses already signed up for" logo={<Logo />} alignment="items-center"/>
      <div className="w-full rounded-2xl overflow-hidden">
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src="users.mp4" type="video/mp4"/>
      </video>
      </div>
    </div>
  );
}
