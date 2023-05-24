import { useState, useEffect } from "react";
import SidebarLinks from "./componets/SidebarLinks";
import "@patternfly/patternfly/patternfly.css";
import MastheadToggler from "./componets/MastheadToggle";
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Page,
  Sidebar,
  SidebarPanel,
  SidebarContent,
  PageSection,
  Spinner,
} from "@patternfly/react-core";
import "./custom.css";

import CommentList from "./CardLists/Comments";
import UserList from "./CardLists/Users";
import PostList from "./CardLists/Posts";

function App() {
  const [activeComponent, setActiveComponent] = useState("todoList");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

    return () => clearTimeout(timeoutId);
    
  }, []);

  const refreshData = () => {
    window.location.reload();
  };

  const handleComponentSwitch = (component: string) => {
    setActiveComponent(component);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Page>
      <Masthead id="basic-example">
        <MastheadToggle>
          {" "}
          <MastheadToggler />
        </MastheadToggle>

        <MastheadContent className="masthead-content">
          <MastheadMain className="logo-container">
            <MastheadBrand>Login</MastheadBrand>
          </MastheadMain>
          <span>
            <img
              src="https://i.insider.com/525ac397ecad044e0bc07620?width=700&format=jpeg&auto=webp"
              alt=""
              style={{ width: "45px", height: "35px" }}
            />
          </span>
        </MastheadContent>
      </Masthead>

      <div className="content-wrapper">
        <Sidebar style={{ height: "85vh", overflow: "auto" }} tabIndex={0}>
          <SidebarPanel variant="sticky">
            <SidebarLinks onLinkClick={handleComponentSwitch} />
          </SidebarPanel>
          <SidebarContent>
            
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="cards">
                {activeComponent === "userList" && <UserList />}
                {activeComponent === "todoList" && <PostList />}
                {activeComponent === "commentList" && <CommentList />}
              </div>
            )}
          </SidebarContent>
        </Sidebar>

        <div className="content-main">
          <PageSection
            isFilled={true}
            style={{ height: "7.5vh", backgroundColor: "black" }}
          >
            <button className="refresh-button" onClick={refreshData}>
              Refresh Data
            </button>
          </PageSection>
        </div>
      </div>
    </Page>
  );
}

export default App;
