import React, { createElement } from 'react'

const Hello = (props) => {
    console.log({props})
    let children = React.Children.toArray(props.children);
    return (
        <div>
            <h1>Greetings {props.name}</h1>
            {children[1]}
        </div>
    )

    // return React.createElement('div', {id: "txt", className: "dummy"}, null, React.createElement('h1', null, 'Hi how ru'));
}

export default Hello
