import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";

const Onboarding = () => {
  return (
    <PageLayout>
      <div className="min-h-ful flex flex-col items-center mt-6">
        <div className="drop-shadow-xl py-5 px-4 bg-white w-1/3 flex flex-col gap-3">
          <div>
            <div className="prose prose-xl prose-h1">Sign in</div>
            <div className="prose prose-sm">
              For security, please sign in to access your information
            </div>
          </div>
          <Tabs isFitted size="lg" colorScheme="purple">
            <TabList>
              <Tab>EMAIL</Tab>
              <Tab>MOBILE</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
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
