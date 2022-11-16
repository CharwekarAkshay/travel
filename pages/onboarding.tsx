import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import SignIn from "../components/SingIn/SignIn";

const Onboarding = () => {
  return (
    <PageLayout>
      <div className="min-h-ful flex flex-col items-center mt-6">
        <div className="drop-shadow-xl py-5 px-4 bg-white w-2/6 flex flex-col gap-3">
          <div>
            <div className="prose prose-xl prose-h1">Sign in</div>
            <div className="prose prose-sm">
              For security, please sign in to access your information
            </div>
          </div>
          <Tabs isFitted>
            <TabList className="text-agoda-blue">
              <Tab>EMAIL</Tab>
              <Tab>MOBILE</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SignIn />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default Onboarding;
