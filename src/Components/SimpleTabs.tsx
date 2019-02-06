import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DataTable from '../Components/DataTable';
import FormSet from '../Components/FormSet';

import {
    createStyles,
    Theme,
} 

from '@material-ui/core';
import { WithStyles } from '@material-ui/core';

interface IProps  {
    children:any;
}
interface IProps2 extends WithStyles<typeof styles> {}  


function TabContainer(props:IProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = (theme: Theme) =>
createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
});




const SimpleTabs = withStyles(styles)(class extends React.Component<IProps2,{}> {
  public state = {
    value: 0,
  };

  public handleChange = (event:any, value:any) => {
    this.setState({ value });
  };

  public render() {
    const { classes } = this.props
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><DataTable /></TabContainer>}
        {value === 1 && <TabContainer><FormSet /></TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
});


export default withStyles(styles)(SimpleTabs);