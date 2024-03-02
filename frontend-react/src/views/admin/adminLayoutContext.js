import { createContext, useState, useContext } from "react";

const AdminLayoutContext = createContext();

const AdminLayoutProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarIsOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarIsOpen((prev) => !prev);
    };
    return (
        <AdminLayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </AdminLayoutContext.Provider>
    )
}

export default AdminLayoutProvider;
export const useAdminLayout = () => {
    return useContext(AdminLayoutContext);
}