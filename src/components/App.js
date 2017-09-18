import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeViewPage from './HomeViewPage'
import CreatePostPage from './CreatePostPage'
import NavigationPage from './NavigationPage'
import CategoryViewPage from './CategoryViewPage'
import PostViewPage from './PostViewPage'

class App extends Component {
  render() {
    return (

      <div >
          <NavigationPage/>
          <Switch>
            <Route exact path='/' component={HomeViewPage}/>
            <Route exact path='/create' component={CreatePostPage}/>
            <Route exact path='/:category' component={CategoryViewPage}/>
            <Route exact path='/:category/:id' component={PostViewPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;
