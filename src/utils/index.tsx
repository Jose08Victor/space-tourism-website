import { render } from '@testing-library/react';
import { DataContext } from '../contexts';
import { ContextType } from '@/types';
import Data from "../json/data.json";

export const changeClass = (element: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    document.querySelectorAll('li').forEach((e) => e.classList.remove('active'));
    element.currentTarget.classList.add('active');
}

export const renderComponent = (Component: JSX.Element, value?: ContextType) => {
    const Context = { data: Data }
    
    return render(
        <DataContext.Provider value={!value ? Context : value}>
            {Component}
        </DataContext.Provider>
    );
}