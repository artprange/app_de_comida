import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isEightChars = (value) => value.trim().length === 8;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isEightChars(enteredPostalCode);
    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid,
      });
  
      const formIsValid =
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid;
  
      if (!formIsValid) {
        return;
      }
  
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
      });
    };
  
    const nameControlClasses = `${classes.control} ${
      formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
      formInputsValidity.street ? '' : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
      formInputsValidity.postalCode ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
      formInputsValidity.city ? '' : classes.invalid
    }`;
  
    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Nome</label>
          <input type='text' id='name' ref={nameInputRef} />
          {!formInputsValidity.name && <p>Favor inserir um nome válido!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor='street'>Endereço</label>
          <input type='text' id='street' ref={streetInputRef} />
          {!formInputsValidity.street && <p>Favor inserir um endereço válido!</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor='postal'>CEP</label>
          <input type='text' id='postal' ref={postalCodeInputRef} />
          {!formInputsValidity.postalCode && (
            <p>Favor inserir um CEP válido! xxxxx xxx!</p>
          )}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor='city'>Cidade</label>
          <input type='text' id='city' ref={cityInputRef} />
          {!formInputsValidity.city && <p>Favor inserir uma ciadde válido!</p>}
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancelar
          </button>
          <button className={classes.submit}>Confirmar</button>
        </div>
      </form>
    );
  };
  
  export default Checkout;