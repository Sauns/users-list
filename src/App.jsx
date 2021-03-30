import UserList from "./components/UserList/UserList"

import './App.scss';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import UserDetail from "./components/UserDetail/UserDetail";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={UserList} />
          <Route path={'/user/:name'} component={UserDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
