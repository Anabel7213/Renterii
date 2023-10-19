"use client";

import Title, { Logo } from "./ui/title";
import Article from "./ui/article";

export default function Stories() {
  return (
    <div className="flex flex-col gap-2 md:mx-8 md:my-16 sm:mx-4 sm:my-8 flex-wrap">
      <Title subtitle="Latest stories" icon={true} firstOf="Stories from inside the " logo={<Logo />} lastOf="community" />
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <Article subtitle="founders special" image="blog1" link="#" title="Jordan: on connecting communities thru sharing" fontMedium="md:text-7xl" fontSmall="sm:text-7xl" bgColor="bg-green-600" width="max-w-[500px]" height="h-[616px]" />
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <Article subtitle="renters special" link="#" image="blog2"  title="Discover the best rental scooter businesses in Toronto" bgColor="bg-green-600" height="h-[300px]" />
          <Article subtitle="locals + businesses special" link="#" image="blog3"  title="Why a co-working space encourages innovation" bgColor="bg-green-600" height="h-[300px]" />
        </div>
      </div>
    </div>
  );
}