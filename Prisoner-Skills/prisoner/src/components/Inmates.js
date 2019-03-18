import React from 'react';
import {connect} from 'react-redux';
import {deleteData, updateSingleInmate, toggleShowUpdate} from '../actions';
import SelectedInmate from './SelectedInmate'
import UpdateInmateForm from './UpdateInmateForm'

class Inmates extends React.Component {
    handleDeleteInmate = () => {
        const {id} = this.props.inmateSelected;
        this.props.deleteData(id);
    }

    handleShowInmate = inmate => {
        this.props.updateSingleInmate(inmate);
    }

    toggleShowUpdate = () => {
        this.props.toggleShowUpdate();
    }
    render() {
        return (
            <div className='inmate-container'>
                <ul className='list'>
                    {this.props.inmates.map(inmate => {
                        return (
                            <li onClick={() => this.handleShowInmate(inmate)} key={inmate.id}>{inmate.name}</li>
                        )
                    })}
                </ul>
                {Object.keys(this.props.inmateSelected).length > 0 ? (
                    <SelectedInmate
                        handleShowInmate={this.handleShowInmate}
                        toggleShowUpdate={this.toggleShowUpdate}
                        handleDeleteInmate={this.handleDeleteInmate}
                        selected={this.props.inmateSelected}
                        />

                ): null}
                {this.props.showUpdate ? (
                    <UpdateInmateForm inmate={this.props.inmateSelected} />
                ): null}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deletingData: state.inmateReducer.deletingData,
        error: state.inmateReducer.error,
        showUpdate: state.singleReducer.showUpdate,
        inmateSelected: state.singleReducer.inmateSelected
    }
}

export default connect(mapStateToProps, {deleteData, updateSingleInmate, toggleShowUpdate})(Inmates)