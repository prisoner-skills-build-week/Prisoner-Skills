import React from 'react';
import {connect} from 'react-redux';
import {createData} from '../actions'

class InmateForm extends React.Component {
    state = {
        name: '',
        release: '',
        state: ''
    }

    handleInputChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddInmate = e => {
        e.preventDefault()
        const {name, release, state } = this.state;
        this.props.createData({ name, release, state});
        this.setState({name: '', release: '', state: '' })
    };

    render() {
        return (
            <form>

                <input 
                    value={this.state.name}
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.release}
                    name='release'
                    type='text'
                    placeholder='release'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.state}
                    name='state'
                    type='text'
                    placeholder='state'
                    onChange={this.handleInputChanges}
                />
            
            <button onClick={this.handleAddInmate}>Add Inmate</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingData: state.creatingData
    };
};

export default connect(mapStateToProps, {createData} )(InmateForm)