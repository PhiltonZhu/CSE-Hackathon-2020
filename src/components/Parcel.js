import React from 'react';
import closedparcel from '../closed-parcel.png'
import './Parcel.css'

class Parcel extends React.Component {

    render() {
        return(
                this.props.parcels.map((parcel) => (
                    <h1>{parcel.description}</h1>
                )),
                this.props.parcels.map((parcel) => (
                    //<image src={parcel.image} alt="closedparcel"/>
                    <h2>parcel.id</h2>
                ))
        )
    }
}

export default Parcel
