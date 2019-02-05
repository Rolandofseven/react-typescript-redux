import * as axios from 'axios';
import * as React from 'react';

interface IState {
    data:any[]
    playOrPause?: string;
}

class DataTable extends React.Component<{},IState> {

    constructor(props:{}){
        super(props);
        this.state = {
            data:[],
            playOrPause: 'Play',
        };
    }

    public componentDidMount (){
        axios.default.get("https://jsonplaceholder.typicode.com/todos").then(data => {
            this.setState({data:data.data});
            alert(JSON.stringify(data.data))
        }).catch(err => {
            alert("Something went wrong");
        });
    }

    public getTableBody(){
        /* const d = this.state.data.forEach(da => (
            <tr><td>bob</td></tr>
        )); */
        const d = this.state.data.map(da => (
            <tr>
                <td>{da.id}</td>
                <td>{da.title}</td>
                <td>{da.completed.toString()}</td>
            </tr>
        ))
        return d;    
    }
    public render() {
    return (
        <div>
            <div>
                <table style={{width: '100%'}}>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                    {this.getTableBody()}
                </table>
            </div>
        </div>
    );
  }
}

export default DataTable;
