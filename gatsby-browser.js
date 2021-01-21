import React from "react"
import { ToggleProvider } from "./src/context/ToggleContext";

export const wrapRootElement = ({ element }) => (
    <ToggleProvider>{element}</ToggleProvider>
)