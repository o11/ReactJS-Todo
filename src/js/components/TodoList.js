import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                        <a onClick={this.props._onListItemClicked}>
                            {this.props.value}
                        </a>
                    </h5>
                    <small>
                        <input type="button" style={{cursor:'pointer'}}
                               onClick={this.props._onDeleteItemClicked}
                               className='btn btn-sm btn-danger' value='delete'/>
                    </small>
                </div>
            </div>
        );
    }
}