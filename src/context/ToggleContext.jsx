import React, { useState } from "react"

const ToggleContext = React.createContext()


export const ToggleProvider = (props) => {

    const [toggle, setToggle] = useState(false);

    const ClickToggle = () => {
        setToggle(!toggle)
    };
    return (

        <ToggleContext.Provider
            value={{
                ClickToggle,
                toggle
            }}>
            {props.children}
        </ToggleContext.Provider>
    );
};

export default ToggleContext;