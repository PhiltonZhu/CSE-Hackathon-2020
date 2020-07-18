import React from 'react';
import './Parcel.css'

class Parcel extends React.Component {

    render() {
        return(
                this.props.parcels.map((parcel) => (
                    <img src={parcel.image} alt="closedparcel" className="closedparcel"/>
                ))
        )
    }
}

export default Parcel
