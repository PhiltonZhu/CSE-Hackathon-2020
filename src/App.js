import React from 'react';
import './App.css';
import closedparcel from './closed-parcel.png';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Parcel from './components/Parcel';



class App extends React.Component {
    state = {
        parcels: [
            {
                id:1,
                description:'Draw a painting of your favourite animal',
                image:closedparcel
            },
            {
                id:2,
                description:'Draw a painting of your favourite person',
                image:closedparcel
            },
            {
                id:3,
                description:'Draw a painting of your favourite food',
                image:closedparcel
            }
        ]
    }


    render() {
      return (
          <Router>
            <Route path='/' exact strict render={
                () => { return (
                  <div className="App">
                  <header className="App-header">

                  <Link to="/topparcel"><img src={this.state.parcels[0].image} alt="closedparcel" className="closedparcel"/></Link>

                  <Link to="/midparcel"><img src={this.state.parcels[1].image} alt="closedparcel" className="closedparcel"/></Link>

                  <Link to="/botparcel"><img src={this.state.parcels[2].image} alt="closedparcel" className="closedparcel"/></Link>

                  <div class="poggies1">
                    <p>Rating: 5/5</p>
                  </div>

                  <div class="poggies2">
                    <p>Rating: 3/5</p>
                  </div>

                  <div class="poggies3">
                    <p>Rating: 2/5</p>
                  </div>

                  </header>
                  </div>
                )}
            }/>
            <Route path='/topparcel' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">
                    <div className='topparcelheader'><p>Thank you for opening me!</p></div>
                    <div className='topparcelchallenge'><p>  Parcel Challenge:</p></div>
                    
                    </header>
                    </div>
                )}
            }/>
            <Route path='/midparcel' exact strict render= {
                () => { return (
                    <h1>IT WORKSS</h1>
                )}
            }/>
            <Route path='/botparcel' exact strict render= {
                () => { return (
                    <h1>IT WORKSSS</h1>
                )}
            }/>
          </Router>
      );
    }
}

export default App;
