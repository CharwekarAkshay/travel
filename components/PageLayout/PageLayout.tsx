import React from "react";
import Navigation from "../Navigation/Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default PageLayout;
