import * as React from 'react';
import * as axios from 'axios';
import {
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    withStyles,
  } from '@material-ui/core';
  import { WithStyles } from '@material-ui/core';

  const styles = (theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    });

    const CustomTableCell = withStyles(theme => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
  


interface IState   {
    data:any[]
    playOrPause?: string;
}

interface IProps extends WithStyles<typeof styles> {}

const DataTable = withStyles(styles)(class extends React.Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            data:[],
            playOrPause: 'Play'
        };
    }

    public componentDidMount (){
        axios.default.get("https://jsonplaceholder.typicode.com/todos").then(res => {
            this.setState({data:res.data});
        }).catch(err => {
            alert("Something went wrong");
        });
    }

    public getTableBody(){
        const dataTable = this.state.data.map(da => (
            <tr>
                <td>{da.id}</td>
                <td>{da.title}</td>
                <td>{da.completed.toString()}</td>
            </tr>
        ))
        return dataTable;    
    }

    public render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root}>
                <Table className={classes.table} padding="dense">
                <TableHead>
                <TableRow>
                    <CustomTableCell numeric>Id</CustomTableCell>
                    <CustomTableCell>Title</CustomTableCell>
                    <CustomTableCell>Completed</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.data.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                    {row.id}
                                </CustomTableCell>
                                <CustomTableCell>{row.title}</CustomTableCell>
                                <CustomTableCell>{row.completed.toString()}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </Paper>
        );
    }
})

export default withStyles(styles)(DataTable); 
