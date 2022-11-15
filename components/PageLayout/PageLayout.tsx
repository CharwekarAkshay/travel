import React from "react";
import Navigation from "../Navigation/Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen max-h-screen flex flex-col">
      <Navigation />
      <div className="grow bg-agoda-background">{children}</div>
    </div>
  );
};

export default PageLayout;
