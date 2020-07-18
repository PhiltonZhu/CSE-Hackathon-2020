import React from 'react';
import './App.css';
import closedparcel from './closed-parcel.png'

import Parcel from './components/Parcel'


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
          <div className="App">
          <header className="App-header">
          <image src={'./closed-parcel.png'} alt='teset', className='App-teset'/>
          <Parcel parcels={this.state.parcels} />
          </header>
          </div>
      );
    }
}

export default App;
