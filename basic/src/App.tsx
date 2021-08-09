import {
  PrimaryView,
  SecondaryView,
  Sidebar,
  SidebarLayout,
} from "@syumai/react-sidebar-layout";
import "./App.css";

const SidebarContent = () => (
  <>
    <header>
      <h1>Sidebar</h1>
    </header>
    <nav>
      <ul>
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
        <li>menu 4</li>
      </ul>
    </nav>
    <main>
      <p>{loremIpsum}</p>
    </main>
  </>
);

const PrimaryViewContent = () => (
  <>
    <header>
      <h1>Primary view</h1>
    </header>
    <main>
      <p>
        This is a basic example of{" "}
        <a href="https://github.com/syumai/react-sidebar-layout">
          react-sidebar-layout
        </a>
        . (This example is hosted on{" "}
        <a href="https://github.com/syumai/react-sidebar-layout-examples">
          react-sidebar-layout-examples
        </a>
        .)
      </p>
      <p>{loremIpsum}</p>
      <p>{loremIpsum}</p>
    </main>
  </>
);

const SecondaryViewContent = () => (
  <>
    <header>
      <h1>Secondary view</h1>
    </header>
    <main>
      <p>{loremIpsum}</p>
      <p>{loremIpsum}</p>
    </main>
  </>
);

const App = (): JSX.Element => {
  return (
    <SidebarLayout defaultSidebarWidth={200} defaultSecondaryViewWidth={250}>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <PrimaryView>
        <PrimaryViewContent />
      </PrimaryView>
      <SecondaryView>
        <SecondaryViewContent />
      </SecondaryView>
    </SidebarLayout>
  );
};

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
`;

export default App;
