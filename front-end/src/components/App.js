import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar
} from '@ui5/webcomponents-react';
import './App.scss';

function App() {
  return (
    <FlexBox
      style={{width: '100%', height: '100vh', padding: '0'}}
      direction={FlexBoxDirection.Column}
    >
      <FlexBox
        style={{ width: '100%', minWidth: '350px', maxWidth: '800px', margin: '0 auto'}}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <ShellBar primaryTitle="UI5 Web Components for React Template" />
        <FlexBox
          style={{ width: '100%' }}
          direction={FlexBoxDirection.Column}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
        >
          <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
            Getting Started with UI5 Web Component for React
          </Link>
        </FlexBox>
      </FlexBox>
      <FlexBox
        style={{width: '100%', height: '20px', backgroundColor: 'red'}}
      >
      </FlexBox>
    </FlexBox>
  );
}

export default App;
