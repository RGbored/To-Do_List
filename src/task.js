import React from 'react';
import './task.css';
class task extends React.Component{
    render(){
        return (
            <div class = "task">
                <div>
                    <button 
                    class = {(this.props.data.complete)?"cbox":"ucbox"} 
                    onClick = {()=>{
                        this.props.onClick(this.props.data.id)
                    }}></button>
                </div>
                <div
                class = {(this.props.data.complete)?"ctext":"uctext"}>
                    {this.props.data.task}
                </div>
            </div>
        );
    }
}

export default task;