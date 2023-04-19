import { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import "@patternfly/patternfly/patternfly.css";
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
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/js/icons/bars-icon";
import "./custom.css";
import Card from "./GeneriCard";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);
  const [isNavOpen] = useState(true);
  const [posts, setPosts] = useState([{ id: 1, title: "", body: "" }]);

  const refreshData = () => {
    // Here you can fetch the new data and update the state
    setPosts([{ id: 2, title: "New Post", body: "New Body" }]);
  };

  return (
    <Page>
      <Masthead id="basic-example">
        <MastheadToggle>
          <Button
            variant="plain"
            onClick={() => {}}
            aria-label="Global navigation"
          >
            <BarsIcon />
          </Button>
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
            <SidebarLinks />
          </SidebarPanel>
          <SidebarContent>
            <div className="cards">
              <Card title="This is a same " footer="call">
                <Post/>
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>     <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
              <Card title="Header" footer="Footer">
                Body
              </Card>
            

            </div>
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