import Image from "next/image";
import React from "react";
import { NavigationModel } from "../../models/NavigationModel";
import NavigationLink from "../NavigationLink/NavigationLink";

import agodaImage from "../../public/assets/agoda_logo.svg";
import RoundedButton from "../RoundedButton/RoundedButton";

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
    <nav className="bg-white py-3 px-8 flex items-center place-content-between">
      <div className="flex gap-9 items-center">
        <Image src={agodaImage} alt="Agoda Logo" width={70} height={37} />
        {navigationItems.map((navigationItem, index) => (
          <NavigationLink key={index} navigation={navigationItem} />
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <RoundedButton text="List your place" type={"bordered"} color ="agoda-fuchsia" />
        <RoundedButton text="Sign In" />
        <RoundedButton text="Create Account" />
      </div>
    </nav>
  );
};

export default Navigation;
