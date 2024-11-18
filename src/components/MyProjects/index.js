import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyProjectsSamples from "./MyProjectsExamples";
import firstProject from "../../../assets/images/project-1.png";
import secondProject from "../../../assets/images/project-2.png";
import thirdProject from "../../../assets/images/project-3.png";

const MyProjects = () => {
  return (
    <section className="MyProjects-wrapper">
      <div className="MyProjects-container">
        <h3 className="MyProjects-title">My Projects</h3>
        <p className="MyProjects-description">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="MyProjects-tabsWrapper">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>UI/UX</Tab>
              <Tab>Web Design</Tab>
              <Tab>App Design</Tab>
              <Tab>Graphic Design</Tab>
            </TabList>
            <TabPanel>
              <div className="MyProjects-examples">
                <MyProjectsSamples
                  projectType="All"
                  title="AirCalling Landing Page Design"
                  image={firstProject}
                />
                <MyProjectsSamples
                  projectType="All"
                  title="Business Landing Page Design "
                  image={secondProject}
                />
                <MyProjectsSamples
                  projectType="All"
                  title="Ecom Web Page Design "
                  image={thirdProject}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="MyProjects-examples">
                <MyProjectsSamples
                  projectType="UI/UX"
                  title="AirCalling Landing Page Design"
                  image={firstProject}
                />
                <MyProjectsSamples
                  projectType="UI/UX"
                  title="Business Landing Page Design "
                  image={secondProject}
                />
                <MyProjectsSamples
                  projectType="UI/UX"
                  title="Ecom Web Page Design "
                  image={thirdProject}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="MyProjects-examples">
                <MyProjectsSamples
                  projectType="Web Design"
                  title="AirCalling Landing Page Design"
                  image={firstProject}
                />
                <MyProjectsSamples
                  projectType="Web Design"
                  title="Business Landing Page Design "
                  image={secondProject}
                />
                <MyProjectsSamples
                  projectType="Web Design"
                  title="Ecom Web Page Design "
                  image={thirdProject}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="MyProjects-examples">
                <MyProjectsSamples
                  projectType="App Design"
                  title="AirCalling Landing Page Design"
                  image={firstProject}
                />
                <MyProjectsSamples
                  projectType="App Design"
                  title="Business Landing Page Design "
                  image={secondProject}
                />
                <MyProjectsSamples
                  projectType="App Design"
                  title="Ecom Web Page Design "
                  image={thirdProject}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="MyProjects-examples">
                <MyProjectsSamples
                  projectType="Graphic Design"
                  title="AirCalling Landing Page Design"
                  image={firstProject}
                />
                <MyProjectsSamples
                  projectType="Graphic Design"
                  title="Business Landing Page Design "
                  image={secondProject}
                />
                <MyProjectsSamples
                  projectType="Graphic Design"
                  title="Ecom Web Page Design "
                  image={thirdProject}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
