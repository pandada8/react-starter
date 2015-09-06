import "./main.css"

import React from 'react';
import App from './components/App.jsx';

main();

function main() {
    const app = document.createElement('div');
    app.className = "body"
    document.body.appendChild(app);
    React.render(App, app);
}