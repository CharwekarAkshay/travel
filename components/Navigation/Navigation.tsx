import Image from "next/image";
import React from "react";
import { NavigationModel } from "../../models/NavigationModel";
import NavigationLink from "../NavigationLink/NavigationLink";
import dynamic from "next/dynamic";
import agodaImage from "../../public/assets/agoda_logo.svg";

const RoundedButton = dynamic(() => import("../RoundedButton/RoundedButton"), {
  ssr: false,
});

import { useRouter } from "next/router";

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
  const router = useRouter();
  const handleSignInButtonClick = () => {
    router.push("/onboarding");
  };

  const handleListYourPlaceClick = () => {
    router.push("/list-your-property");
  };

  return (
    <nav className="bg-white py-3 px-8 flex items-center place-content-between">
      <div className="flex gap-9 items-center">
        <Image src={agodaImage} alt="Agoda Logo" width={70} height={37} />
        {navigationItems.map((navigationItem, index) => (
          <NavigationLink key={index} navigation={navigationItem} />
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <RoundedButton
          text="List your place"
          type={"bordered"}
          onClick={handleListYourPlaceClick}
        />
        <RoundedButton text="Sign In" onClick={handleSignInButtonClick} />
      </div>
    </nav>
  );
};

export default Navigation;
