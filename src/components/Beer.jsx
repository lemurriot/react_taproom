import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {
  const cardStyle = {
    width: 300
  };
  const beerInformation =
    <div>
      <style jsx>{`
          ul {
            list-style: none;
          }
          .beer-label {
            font-size: 10px;
            font-weight: bold;
          }
          `}</style>
      <ul>
        <li><span className='beer-label'>Beer: </span> {props.title}</li>
        <li><span className='beer-label'>Brand: </span> {props.brand}</li>
        <li><span className='beer-label'>Price: </span>{props.price}</li>
        <li><span className='beer-label'>ABV: </span>{props.abv}</li>
      </ul>
    </div>;
  if (props.currentRouterPath === '/edit'){
    return(<div style={cardStyle} onClick={() => {props.onBeerSelection(props.beerId);}}>{props.title}</div>
    );
  } else {
    return (
      <div>{beerInformation}</div>
    );
  }
}

Beer.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  amount: PropTypes.number,
  beerId: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};

export default Beer;
