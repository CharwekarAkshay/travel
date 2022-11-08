import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavigationModel } from "../../models/NavigationModel";

interface NavigationLinkProps {
  navigation: NavigationModel;
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { navigation } = props;
  const router = useRouter();
  console.log(router.pathname);
  console.log(navigation.link);
  console.log(router.pathname === navigation.link);
  
  return (
    <Link href={navigation.link}>
      <span className={router.pathname === navigation.link ? "text-sky-600 hover:text-sky-500 font-medium" : "hover:text-sky-500 font-medium"}>
        {navigation.linkName}
      </span>
    </Link>
  );
};

export default NavigationLink;
