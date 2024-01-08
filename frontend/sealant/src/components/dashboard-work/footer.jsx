import React from "react";

import { Telegram } from 'react-bootstrap-icons';

import './styles/footer.css';


export default function Footer() {
    return (
        <React.Fragment>
            <footer className="text-center text-lg-start" id="footer" style={{ backgroundColor: "#EBE6D6" }}>
                <div className="text-center p-3">

                    © 2024 Copyright&nbsp;:&nbsp;

                    <a className="text-body"
                        href="https://silant.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Silant.com
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a className="text-body"
                        href="tel:+7-8352-20-12-09">
                        +7-8352-20-12-09
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <a className="text-body"
                        href="https://t.me/LEON_JOFE"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Telegram size={20} />
                    </a>

                </div>
            </footer>
        </React.Fragment>
    );
};
