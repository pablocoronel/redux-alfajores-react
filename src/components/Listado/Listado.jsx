import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';

class Listado extends Component {
	// static Listado.propTypes = {};

	constructor(props) {
		super(props);

	}
    
    
    componentDidMount() {
        let lista = this.props.acciones.listarAlfajor();
        
    }
    

	render() {
        return <div>
        {/* {console.log(this.props)} */}
        {/* {lista} */}
        </div>;
	}
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		acciones: { ...bindActionCreators(actionCreators, dispatch) }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Listado);
