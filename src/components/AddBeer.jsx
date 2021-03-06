import React from 'react';
import PropTypes from 'prop-types';



function AddBeer(props) {
  let _title = null;
  let _brand = null;
  let _abv = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log(_abv.value);
    props.onAddingNewBeerToList({title: _title.value, brand: _brand.value, abv: _abv.value, price: _price.value,  amount: 124});
    _title.value = '';
    _brand.value = '';
    _abv.value = '';
    _price.value = '';
  }

  const addBeer = {
    position: 'relative'
  };

  return(
    <div style={addBeer}>
      <style jsx>{`
          input {
            margin-left: 20px;
            margin-bottom: 15px;
            border: none;
            border-bottom: 1px solid grey;
            height: 20px;
            width: 100%;
          }
          input:focus {
            outline: none;
          }
          button {
            background-color: #6363f1db;
            height: 40px;
            width: 100%;
            color: white;
            font-size: 15px;
            text-shadow: .5px .5px 1px black;
            box-shadow: 1px 1px 1px black;
            transition: .1s transform;
          }
          button:hover {
            transform: scale(1.1);
            box-shadow: 1px 2px 2px black;
          }
          .window {
            height: 100px;
            width: 100px;
          }`}</style>
      <form onSubmit={handleNewBeerFormSubmission}>
        <label>Title:</label><input
          placeholder='beer title'
          type='text'
          id='title'
          ref={(input) => {_title = input;}}/><br/>
        <label>Brand:</label><input
          placeholder='beer brand'
          type='text'
          id='brand'
          ref={(input) => {_brand = input;}}/><br/>
        <label>ABV:</label><input
          placeholder="e.g. '5.2%'"
          type='text'
          id='abv'
          ref={(input) => {_abv = input;}}/><br/>
        <label>Price:</label><input
          placeholder='price per pint'
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/><br/>
        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

AddBeer.propTypes = {
  onAddingNewBeerToList: PropTypes.func
};

export default AddBeer;
