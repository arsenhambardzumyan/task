import React, { useState } from 'react';
import currencyIcon from './assets/icons/ֆ.png';
import currencyIconRub from './assets/icons/₽.png';
import arrowDropDown from './assets/icons/arrow-drop-down.png';

import './assets/css/ConvertInputs.css';

const ConvertInputs = () => {
    const [inputValue, setInputValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const rubles = parseFloat(value) * 15;
        const roundedRubles = rubles.toFixed(2);
        setConvertedValue(roundedRubles);
    };

    return (
        <div className="convert-inputs">
            <p className="label">Укажите сумму</p>
            <div className="input-group">
                <div className="input-group1">
                    <input
                        type="text"
                        className="form-control convert"
                        placeholder=" 0000.00"
                        aria-label="Convert"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className="input-group-addon">
                        <img src={currencyIcon} alt="Currency Icon" />
                    </div>
                </div>
                <div className="input-group2">
                    <input
                        type="text"
                        className="form-control convert-rub"
                        placeholder=" 0000.00"
                        aria-label="Converted Rubles"
                        value={convertedValue}
                        readOnly
                    />
                    <div className="input-group-addon">
                        <img src={currencyIconRub} alt="Currency Icon Rub" />
                        <img src={arrowDropDown} alt="Arrow Drop Down" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConvertInputs;
