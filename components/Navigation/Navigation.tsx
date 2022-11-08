import Image from "next/image";
import React from "react";
import { NavigationModel } from "../../models/NavigationModel";
import NavigationLink from "../NavigationLink/NavigationLink";

import agodaImage from "../../public/assets/agoda_logo.svg";

const navigationItems: NavigationModel[] = [
  {
    linkName: "Flight + Hotel",
    link: "/packages",
  },
  { linkName: "Hotel & Homes", link: "/" },
  { linkName: "Flights", link: "/flights" },
  { linkName: "Coupons & Deals", link: "/deals" },
  { linkName: "Apartments", link: "/apartments" },
  { linkName: "Activities", link: "/activities" },
];

const Navigation = () => {
  return (
    <nav className="bg-white py-3 px-8">
      <div className="flex gap-9 items-center">
        <Image src={agodaImage} alt="Agoda Logo" width={80} height={2} />
        {navigationItems.map((navigationItem, index) => (
          <NavigationLink key={index} navigation={navigationItem} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
