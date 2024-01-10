import React from "react";

import { useHistory } from 'react-router-dom';
import { InfoSquare } from 'react-bootstrap-icons';


export default function Header(props) {
    let history = useHistory();

    return (
        <React.Fragment>
            <header className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#EBE6D6" }}>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="hstack gap-3">
                            <div className="bg-body-tertiary border">Номер машины: {props.car[0] ? props.car[0]['id'] : ''}</div>
                            <div className="bg-body-tertiary border">Заводской номер: {props.car[0] ? props.car[0]['factory_number'] : ''}</div>
                        </div>
                    </div>

                    <div className="navbar-nav flex-row">
                        <p title="
                        1. Наведите курсор на интересующий вас элемент (В частности предложения с 3 точками!).
                        3. При нажатии на какую либо из моделей комплектующих машины, отображается полная информация (запчасти).
                        "><InfoSquare size={20} color="#163E6C" /></p>
                    </div>

                    <div className="w-auto p-3 translucent-bg">
                        Информация о проведенных ТО и рекламации вашей техники
                    </div>&nbsp;&nbsp;

                    <button
                        onClick={() => { history.push('/dash') }}
                        type="button"
                        className="btn"
                        style={{ WebkitTextFillColor: "white", backgroundColor: '#163E6C' }}
                        data-mdb-ripple-init>
                        Вернуться
                    </button>

                </div>
            </header>
        </React.Fragment>
    );
};
