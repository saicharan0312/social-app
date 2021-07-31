import React from 'react';

import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = props => {
    if (props.items.length === 0 ) {
        return (
            <div className="place-list center">
                <Card>
                    <h1>No places are there tap on + to create one</h1>
                    <button > +</button>
                </Card>
            </div>
        );
    }
    return (
        <ul className="place-list">
          { props.items.map (place =>
            <PlaceItem 
             key = { place.id }
             id = { place.id }
             title = { place.title }
             image = { place.imageUrl }
             description = { place.description }
             address = { place.address }
             creatorId = { place.creator }
             coordinates = { place.location }
            /> 
           )}
        </ul>
    );
};

export default PlaceList;