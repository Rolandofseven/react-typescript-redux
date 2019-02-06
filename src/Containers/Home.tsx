import * as React from 'react';
import NavBar from '../Components/NavBar';
import SimpleTabs from '../Components/SimpleTabs';

class Home extends React.Component<{ textToShow: string, showIt: boolean }> {
  public render() {

    return (
      <div>
        <NavBar /> <br/>
        <SimpleTabs />
      </div>
    );
  }
}

export default Home;
