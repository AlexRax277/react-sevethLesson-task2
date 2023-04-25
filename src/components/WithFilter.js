import React, { useState, Children, useEffect } from 'react';


const WithFilter = (Component, [func1, func2]) => (props) => {
    
    return Children.map(Component(props), (Element) => {
        const chooseCover = () => {
            return Element.props.views > 1000 ? func1: func2; 
        }
        const Cover = chooseCover();
        return <Cover>
            {Element}
        </Cover>
    });
};

export default WithFilter;