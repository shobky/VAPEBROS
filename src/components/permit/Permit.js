import React, { useState } from 'react';
import './permit.css';
import Cookies from 'js-cookie';

const Permit = ({ handleAddCookie, nonPermit }) => {
  const [cookieValue, setCookieValue] = useState(Cookies.get('avove18'));

  const setAgeCookie = (name, value) => {
    Cookies.set(name, value, { expires: 36500 });
    setCookieValue(value);
    handleAddCookie(value === 'yes' ? true : false);
  };

  return (
    <div className='permit-container'>
      <div className='permit-inner-container'>
        <h1>VAPEBROS</h1>
        {nonPermit ? (
          <p className='nopermit-error'>
            You must be 18 or older to access VABESTORE.
          </p>
        ) : (
          <>
            <p className='permit-head'>
              You must be of legal smoking age to buy our products.
            </p>
            <p className='permit-que'>Are you 18 years old or above?</p>
            <div className='permit-buttons'>
              <button
                onClick={() => setAgeCookie('avove18', 'yes')}
                className='permit-yes'
              >
                YES
              </button>
              <button
                onClick={() => setAgeCookie('avove18', 'no')}
                className='permit-no'
              >
                NO
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Permit;
