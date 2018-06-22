import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function onClickHandler() {
//     return document.getElementById('userName');
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// }

// const element = (
//     <div>
//         <input type='text' id='userName' /> <input type='button' onClick={onClickHandler()} />
//         <h1>Hello {formatName(user)}</h1>
//     </div>
// );
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}

function App() {
    return(
        <div>
            <Welcome name="Joy1"/>
            <Welcome name="Joy2"/>
            <Welcome name="Joy3"/>
        </div>
    );
}
// const element = <Welcome name="Joy" ud='trt'/> 
ReactDOM.render(<App />, document.getElementById('root'));
