import React, { useState } from 'react';
import './assets/css/BankCardForm.css';
import default2 from './assets/icons/default2.png';

const BankCardForm = () => {

    const [formData, setFormData] = useState({
        cardNumber: '',
        expirationDateMM: '',
        expirationDateYY: '',
        cvv: '',
    });
    const [isValid, setIsValid] = useState({
        cardNumber: true,
        expirationDate: true,
        cvv: true
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Валидация номера карты
        const cardNumberValid = /^\d{16}$/.test(formData.cardNumber);
        // Валидация даты
        let expirationDateValid = false;
        // let expirationDateParts = [];
        if (formData.expirationDateMM || formData.expirationDateYY) {
            expirationDateValid = /^((0[1-9])|(1[0-2]))\/((2[2-9])|([3-9][0-9]))$/.test(formData.expirationDateMM + '/' + formData.expirationDateYY);
        }

        if(expirationDateValid){
            const expirationDate = new Date(`20${formData.expirationDateYY}`, formData.expirationDatePartsMM - 1);

            const currentDate = new Date();

            if (expirationDate <= currentDate) {
                console.log('Please enter a future expiration date.');
                expirationDateValid = false;
            } else {
                console.log('Expiration date is valid.');
                expirationDateValid = true;
            }
        }else{
            console.log('Please enter a valid expiration date.');
            expirationDateValid = false;
        }

        // Валидация CVV
        const cvvValid = /^\d{3}$/.test(formData.cvv);

        setIsValid({
            cardNumber: cardNumberValid,
            expirationDate: expirationDateValid,
            cvv: cvvValid
        });

        if (cardNumberValid && expirationDateValid && cvvValid) {
            console.log('Данные формы:', formData);
        } else {
            console.log('Форма содержит недопустимые значения.');
        }
    };

    return (
            <form className="bank-card-form" onSubmit={handleSubmit}>
                <div className="form">
                    <div className="selected-card">
                        <div className="front-card">
                            <div className="front-card-info">
                                <div className="form-group">
                                    <label htmlFor="cardNumber">Номер карты</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        placeholder="Номер карты"
                                        className="form-control"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        style={{ borderColor: isValid.cardNumber ? '' : 'red' }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="expirationDateMM">Действует до</label>
                                    <div className="form-expirationDate">
                                        <input
                                            type="text"
                                            id="expirationDateMM"
                                            name="expirationDateMM"
                                            className="form-control"
                                            placeholder="мм"
                                            value={formData.expirationDateMM}
                                            onChange={handleInputChange}
                                            style={{ borderColor: isValid.expirationDate ? '' : 'red' }}
                                        />
                                        <span> / </span>
                                        <input
                                            type="text"
                                            id="expirationDateYY"
                                            name="expirationDateYY"
                                            className="form-control"
                                            placeholder="гг"
                                            value={formData.expirationDateYY}
                                            onChange={handleInputChange}
                                            style={{ borderColor: isValid.expirationDate ? '' : 'red' }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="back-card">
                            <div className="form-group form-back-card">
                                <label htmlFor="cvv">CVV/CVC</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    className="form-control"
                                    placeholder="000"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    style={{ borderColor: isValid.cvv ? '' : 'red' }}
                                />
                                <p>три цифры с обратной стороны карты</p>
                            </div>
                        </div>
                    </div>

                    <div className="condition-checkbox">
                        <div className="first-row">
                            <input
                                type="checkbox"
                                id="condition-checkbox-input"
                                name="condition"
                            />
                        </div>
                        <div className="second-row">
                            <label htmlFor="condition-checkbox-input" className="second-row-label">
                                <div className="top-row">
                                    <span>Запомнить эту карту. Это безопасно.</span>
                                    <img src={default2} alt="" />
                                </div>
                                <div className="bottom-row">
                                    <p>Сохраняя карту, вы соглашаетесь с
                                        <a href="#"> условиями привязки карты.</a>
                                    </p>
                                </div>
                            </label>
                        </div>


                    </div>

                    <div className="submit">
                        <button type="submit" className="btn btn-primary">
                            Оплатить
                        </button>
                    </div>

                </div>

            </form>
    );
};

export default BankCardForm;
