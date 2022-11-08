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
  
  return (
    <Link href={navigation.link}>
      <span
        className={
          router.pathname === navigation.link
            ? "text-agoda-blue font-medium"
            : "hover:text-agoda-blue font-medium"
        }
      >
        {navigation.linkName}
      </span>
    </Link>
  );
};

export default NavigationLink;
