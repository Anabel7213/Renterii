"use client"

import Title, { Accent, Logo } from "./ui/title"
import Card from "./ui/card"

export default function Audience() {
    return (
        <div className="flex flex-col md:m-8 sm:m-4 sm:mt-8">
            <Title firstOf="Transforming the way communities share items, spaces and experiences with each other." logo={<Logo />} middleOf="allows you to" accent={<Accent />} lastOf="in one easy-to-use app." />
            <Card title="for renters" image="/renter.png" description="Rent and pay seamlessly, chat to businesses and local lenders in real time, connect as a community. All in one place." link="https://apps.apple.com/ca/app/renterii/id1532982347" button="try for free" />
            <Card title="for locals & businesses" image="/business.png" description="Gain new customers, reduce risk and improve everyday operations while connecting with your local community. Work smarter, not harder." direction="flex-row-reverse" link="https://apps.apple.com/ca/app/renterii-lender/id6450633322" button="learn more" margin="md:mt-8 sm:mt-0"/>
        </div>
    )
}