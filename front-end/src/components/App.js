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
      className='container'
    >
      <FlexBox
        className='page'
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
        className='footer'
      >
      </FlexBox>
    </FlexBox>
  );
}

export default App;
