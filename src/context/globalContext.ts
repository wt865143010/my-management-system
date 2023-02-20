import React from "react";

const theme = {
    light:{
        backgroundColor:'#fff',
        color:'#000'
    },
    dark:{
        backgroundColor:'#000',
        color:'#fff'
    }
}

export const ThemeContext = React.createContext(theme.light)