import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import './Form.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {

  const {price1, price2, price3} = props

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [rate, setRate] = useState('');
  const [lot, setLot] = useState('');
  const [ratePlaceholder, setRatePlaceholder] = useState('виберіть лот');

  useEffect(() => {
      if(lot == 1) setRatePlaceholder("> " + price1);  
      else if(lot == 2) setRatePlaceholder("> " + price2);
      else if(lot == 3) setRatePlaceholder("> " + price3);
      else setRatePlaceholder('виберіть лот')
  }, [lot]);


  const {firestore} = useContext(Context); 


  const phoneRegex = /^(?:(?:\+|00)1\s*[-.\s]?)?(?:\(\d{3}\)|\d{3})\s*[-.\s]?\d{3}\s*[-.\s]?\d{4}$/;
  const isPhoneValid = (phone) => {
    return phoneRegex.test(phone);
  };

  const emailRegex = /^\s*$|^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };

  const isRateValid = (rate, lot) => {
    if(lot == 1) return rate > price1;
    if(lot == 2) return rate > price2;
    if(lot == 3) return rate > price3;
  }


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLotChange = (event) => {
    setLot(event.target.value);
  };

  const handleRateChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setRate(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!isPhoneValid(phone)) {
      toast.error('Невірний формат номеру! Приклад: 0999999999', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if(!isEmailValid(email)) {
      toast.error('Невірний формат електронної пошти! Приклад: dspace@uzhnu.edu.ua', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if(!isRateValid(rate, lot)) {
      let text = "";
      if(lot == 1) text = ">" + price1;
      if(lot == 2) text = ">" + price2;
      if(lot == 3) text = ">" + price3;
      toast.error('Введіть ' + text + ' ставку' , {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    firestore.collection(`${lot}`).add({
      name,
      phone,
      email,
      rate 
    })

    toast.success('Ставка прийнята!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setName('');
    setPhone('');
    setEmail('');
    setRate('');
    setLot('');
  };


  
  return (
    <>
      <ToastContainer />
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">ПІБ*</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон*</label>
          <input type="text" id="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Пошта (Не обов'язково)</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="lot">Лот*</label>
          <select id="lot" value={lot} onChange={handleLotChange} required>
            <option value="">Оберіть лот</option>
            <option value="1">Лот 1</option>
            <option value="2">Лот 2</option>
            <option value="3">Лот 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="rate">Ставка*</label>
          <input placeholder={ratePlaceholder} type="number" id="rate" value={rate} onChange={handleRateChange} required />
        </div>
        <button type="submit">Надіслати</button>
      </form>
    </div>
    
    </>
  );
};

export default Form;
