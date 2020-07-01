import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Top from '../pages/top';
import StageQuestion from '../pages/StageQuestion';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StageQuestion} />
      <Route exact path="/top" component={Top} />
    </Switch>
  </BrowserRouter>
);

export default App;
