import * as React from 'react';
import DataTable from '../Components/DataTable';
import NavBar from '../Components/NavBar';

class Home extends React.Component<{ textToShow: string, showIt: boolean }> {
  public render() {

    return (
      <div>
          <NavBar />
        <div><DataTable /></div>
      </div>
    );
  }
}

export default Home;
