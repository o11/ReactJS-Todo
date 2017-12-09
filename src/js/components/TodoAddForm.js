import React from 'react';

export default class TodoAddForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-row">
                    <div className="col-10">
                        <input style={{borderColor: this.props.valid ? '' : '#dc3545'}} type="text"
                               className="form-control" name='todo'
                               placeholder="Add your to do .."/>
                    </div>
                    <div className="col-2">
                        <input type="submit" className="form-control btn btn-primary" value='Add'/>
                    </div>
                </div>
            </form>
        );
    }
}