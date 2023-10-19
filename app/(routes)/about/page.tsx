export default function About() {
    return (
       <div className="md:m-8 sm:m-4 flex flex-col gap-8">
        <p className="uppercase font-kenya md:text-8xl sm:text-5xl">Renterii was born in community. Our founder found it tough to rent a kayak and a cheap room for an outdoor adventure. So in 2020 he started building a community sharing platform to make it easier to connect with locals to share <span className="text-green-600">items</span>, <span className="text-green-600">spaces</span> + <span className="text-green-600">experiences</span> amongst each other. Today Renterii now connects thousands of users across the world thru sharing.</p>
        <video src="/about.mp4" controls poster="/promoThumbnail.png" className="rounded-2xl md:w-[600px] sm:w-full self-center md:my-8 sm:my-0" />
        <div className="flex md:gap-4 justify-between sm:flex-wrap md:flex-nowrap sm:gap-8">
            <div className="flex flex-col">
                <span className="font-source uppercase text-2xl">How we got here</span>
                <p className="text-gray-400 text-4xl font-bold">Built on a Toronto apartment floor. Founder Jordan Smith with the help of some friends released the first version of Renterii in 2020. Allowing individuals and businesses to list discover and rent everyday items, spaces + experiences directly from each other in a mobile app.</p>
            </div>
            <div className="flex flex-col text-2xl">
                <span className="font-source uppercase">Where we are now</span>
                <p className="text-gray-400 text-4xl font-bold">The Renterii team is made up up folks who have travelled to over  30+ countries. Built of innovators, renters, and advocates working to strengthen communities and improve the sharing industry. Our app allows urbanites, adventures, businesses + communities alike to connect more efficiently. Enabling them to browse, rent, and pay seamlessly for items, spaces + experiences in over 100 countries locally with a download.</p>
            </div>
        </div>
       </div>
    )
}