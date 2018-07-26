import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
// import Header from './Header';

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home />
                            )}
                        />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
