import { createContext, useState, useContext } from "react";

const ChartContext = createContext();

const ChartContextProvider = ({ children }) => {
    const [updateChart, setUpdateChart] = useState(false);
    return (
        <ChartContext.Provider value={{ updateChart, setUpdateChart }}>
            {children}
        </ChartContext.Provider>
    )
}

const useChartContext = () => {
    return useContext(ChartContext);
}
export { ChartContextProvider, useChartContext };
