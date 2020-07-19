import React from 'react';
import './App.css';
import closedparcel from './closed-parcel.png';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Parcel from './components/Parcel';
import refresh from './refresh.png'
import upload from './upload.png'
import Gallery from 'react-grid-gallery'
import cheesecake1 from './cheesecake1.jpg'
import cheesecake2 from './cheesecake2.jpeg'
import cheesecake3 from './cheesecake3.jpeg'
import home from './home.png'



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
        ],

    images :
[{
        src: cheesecake1,
        thumbnail: cheesecake1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
},
{
    src: cheesecake2,
    thumbnail: cheesecake2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},

{
    src: cheesecake3,
    thumbnail: cheesecake3,
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
}
    render() {
      return (
          <Router>
            <Route path='/Immunity' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">
                    <div className="title">
                    <Link to='/' className='link'><p>ImmUnity</p></Link>
                    </div>
                    </header>
                    </div>
                )}
            }/>
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
                  <div class="hashtag1">
                    <p>#Baking</p>
                  </div>

                  <div class="poggies2">
                    <p>Rating: 3/5</p>
                  </div>
                  <div class="hashtag2">
                    <p>#Exercising</p>
                  </div>

                  <div class="poggies3">
                    <p>Rating: 2/5</p>
                  </div>
                  <div class="hashtag3">
                    <p>#Gardening</p>
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
                    <div className='cheesecakeRecipe'>
                    <p>Make a cheesecake by following the recipe below and upload a photo of your creation!</p>
                    <p>Step 1: Preheat oven to 160°C/140°C fan-forced. Grease a 6cm-deep, 22cm round (base) spring-form cake pan.</p>
                    <p>Step 2: Process biscuits until mixture resembles fine breadcrumbs. Add butter. Process until combined. Press mixture over base and sides of pan leaving a 2cm gap from top (see Cooking class). Refrigerate for 30 minutes.</p>
                    <p>Step 3: Process cream cheese, sugar, sour cream, vanilla and lemon rind until smooth. Add eggs, 1 at a time, processing until just combined. Pour into prepared pan. Bake for 50 minutes to 1 hour or until just set and centre wobbles slightly. Allow to cool in oven for 2 hours, with door ajar. Refrigerate overnight. Serve with raspberries.</p>
                    </div>
                    <Link to="/"><img src={refresh} className="refresh"/></Link>
                    <Link to="cheesecakeCommunity"><img src={upload} className="upload"/></Link>
                    </header>
                    </div>
                )}
            }/>
            <Route path='/midparcel' exact strict render= {
                () => { return (
                    <div className="App">
                    <h1>IT WORKSS</h1>
                    </div>
                )}
            }/>
            <Route path='/botparcel' exact strict render= {
                () => { return (
                    <h1>IT WORKSSS</h1>
                )}
            }/>
            <Route path='/cheesecakeCommunity' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">

                    <div className='cheesecakeHeader'><p>Good job on completing your challenge! Check out other people's submissions!</p></div>
                    <img src={cheesecake1} alt='Anonymous Upload' className='cheesecake1'/>
                    <img src={cheesecake2} alt='Jennys Cheesecake'className='cheesecake2'/>
                    <img src={cheesecake3} alt='Anynymouse!' className='cheesecake3'/>
                    <Link to='/random'><img src={home} alt='return menu' className='home'/></Link>
                    </header>

                    </div>
                )}
            }/>
            <Route path='/random' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">

                    <Link to="/random"><img src={this.state.parcels[0].image} alt="closedparcel" className="closedparcel"/></Link>

                    <Link to="/random"><img src={this.state.parcels[1].image} alt="closedparcel" className="closedparcel"/></Link>

                    <Link to="/discard"><img src={this.state.parcels[2].image} alt="closedparcel" className="closedparcel"/></Link>

                    <div class="poggies1">
                      <p>Rating: 4/5</p>
                    </div>
                    <div class="hashtag1">
                      <p>#Leisure</p>
                    </div>

                    <div class="poggies2">
                      <p>Rating: 4/5</p>
                    </div>
                    <div class="hashtag2">
                      <p>#Baking</p>
                    </div>

                    <div class="poggies3">
                      <p>Rating: 3/5</p>
                    </div>
                    <div class="hashtag3">
                      <p>#Gardening</p>
                    </div>

                    </header>
                    </div>
                )}
            }/>
            <Route path='/discard' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">
                    <div className='topparcelheader'><p>Thank you for opening me!</p></div>
                    <div className='topparcelchallenge'><p>  Parcel Challenge:</p></div>
                    <div className='cheesecakeRecipe'>
                    <p>Plant 3 types of vegetables in your garden!</p>
                    </div>
                    <Link to="/new"><img src={refresh} className="refresh"/></Link>
                    <Link to="/discard"><img src={upload} className="upload"/></Link>
                    </header>
                    </div>
                )}
            }/>
            <Route path='/new' exact strict render= {
                () => { return (
                    <div className="App">
                    <header className="App-header">

                    <Link to="/new"><img src={this.state.parcels[0].image} alt="closedparcel" className="closedparcel"/></Link>

                    <Link to="/new"><img src={this.state.parcels[1].image} alt="closedparcel" className="closedparcel"/></Link>

                    <Link to="/new"><img src={this.state.parcels[2].image} alt="closedparcel" className="closedparcel"/></Link>

                    <div class="poggies1">
                      <p>Rating: 4/5</p>
                    </div>
                    <div class="hashtag1">
                      <p>#Cooking</p>
                    </div>

                    <div class="poggies2">
                      <p>Rating: 3/5</p>
                    </div>
                    <div class="hashtag2">
                      <p>#Knitting</p>
                    </div>

                    <div class="poggies3">
                      <p>Rating: 2/5</p>
                    </div>
                    <div class="hashtag3">
                      <p>#Renovation</p>
                    </div>
                    </header>
                    </div>
                )}
            }/>
          </Router>
      );
    }
}

export default App;
