import Navbar from './Navbar';
import Homepage from './Homepage';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import './index.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/create">
              <CreateBlog/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
