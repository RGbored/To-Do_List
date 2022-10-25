import data from './data.json';
import React from 'react';
import Task from './task.js';

class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: data,
            filteredData: data,
        };
    }
    handleClick(i) {
        let newData = this.state.Data.slice();
        console.log(i);
        newData[i-1].complete = !newData[i-1].complete;
        this.setState({Data: newData});
    }
    Add(item) {
        var newItem = {
            "id": this.state.Data.length+1,
            "task": item,
            "complete": false
        }
        this.setState({Data: this.state.Data.concat(newItem), 
        filteredData: this.state.filteredData.concat(newItem)});
        document.getElementById('add').value = "";
    }
    SearchCheck(task) {
        // return false;
        return task.task.toLowerCase().includes(document.getElementById('search').value.toLowerCase());
    }
    Search(item) {
        var newData = this.state.Data.filter(this.SearchCheck);
        this.setState({filteredData: newData});
        console.log(newData);
    }
    render() {
        return (<div>
            <div id = "AddItem">
                <input placeholder='Add Item' type='text' id='add'></input>
                <button onClick={()=>{this.Add(document.getElementById('add').value)}}>Add</button>
            </div>
            <div id = "searchBar">
                <input 
                placeholder='search' 
                type='text' id='search' 
                onInput={()=>{this.Search(document.getElementById('search').value)}}>
                </input>
            </div>
            <div>
                {this.state.filteredData.map(task => {
                    return(
                        <Task 
                        key = {task.id} 
                        data = {task}
                        onClick = {(i)=> this.handleClick(i)}
                        />
                    );
                })}
            </div>
        </div>);
    }
}

export default TaskList;