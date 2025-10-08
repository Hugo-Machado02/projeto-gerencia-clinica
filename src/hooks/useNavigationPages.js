import { useCallback } from 'react';

const useNavigationPages = (onNavigate, activeView) => {

    const getLinkClass = useCallback((viewName) => {
        return activeView === viewName ? 'element marked' : 'element';
    }, [activeView]);

    const clickLinkNavbar = useCallback((viewName) => (e) => {
        e.preventDefault();
        onNavigate && onNavigate(viewName);
    }, [onNavigate]);

    return { getLinkClass, clickLinkNavbar };
};

export default useNavigationPages;