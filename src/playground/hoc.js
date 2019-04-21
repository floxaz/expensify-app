// Higher Order Component - component thar render another component

import React from 'react';
import ReactDOM from 'react-dom';



const Info = props => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = WrappedComponent => {
    return (props) => (
        <div>
           {props.isAdmin && <p>This is private info. Please don't share!</p>}
           <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = WrappedComponent => {
    return (props) => (
        props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You're not authorized to see this information!</p>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the info"  />, document.getElementById('app'));