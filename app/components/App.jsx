import React from 'react';
import Router, {Route} from "react-router";
import { history } from 'react-router/lib/HashHistory';
import Note from './Note.jsx';
import Index from "./Index.jsx";

export default (<Router history={history}>
        <Route path="/" component={Note} />
    </Router>);