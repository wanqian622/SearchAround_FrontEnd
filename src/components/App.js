import React from 'react';
import '../styles/App.css';
import {Header} from "./Header";
import {Main} from "./Main";

class App extends React.Component {
    state = {
        isLoggedIn:false
    }

    handleLogin = (token)=>{
        this.setState(
            {isLoggedIn:true}
        )
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Main isLoggedIn={this.state.isLoggedIn} handleLogin = {this.handleLogin} />
            </div>
        );
    }
}

export default App;
