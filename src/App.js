import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchFormData
} from './actions';
import './App.css';
import Form from './components/form/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchFormData());
    }

    render() {
        const {form} = this.props;
        return (
            <MuiThemeProvider>
                <div className="App">
                    <AppBar title="Form Builder" iconElementRight={<FlatButton label="Save"/>}/>
                    <div className='App-Contents'>
                        {form.sections &&
                        <Form {...form} />
                        }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app,
        form: state.form
    }
}

export default connect(mapStateToProps)(App);
