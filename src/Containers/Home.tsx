import * as React from 'react';
import DataTable from '../Components/DataTable';

class Home extends React.Component<{ textToShow: string, showIt: boolean }> {
  public render() {

    return (
      <div>
        <div> {this.props.textToShow}</div>
        <div><DataTable /></div>
      </div>
    );
  }
}

export default Home;
