import React from 'react';
import './assets/css/CardDisplay.css';
import plusIcon from './assets/icons/default.png';

const CardDisplay = () => {
    return (
        <div className="card-display">
            <div className="existing-cards">
                <div className="card">
                    <div className="card-background"></div>
                    <div className="card-content">
                        <div className="card-number">
                            <span className="hide-number">••••</span><span> 3282</span></div>
                        <div className="card-info">12 / 23</div>
                    </div>
                </div>
            </div>

            <button className="new-card" onClick="#">
                <div className="new-card-content">
                    <div className="content ">
                        <div className="d">
                            <div>
                                <img src={plusIcon} alt="Plus Icon" className="plus-icon"/>
                                <div className="new-card-label">Новая карта</div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default CardDisplay;
