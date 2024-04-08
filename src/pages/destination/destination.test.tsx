import { fireEvent } from '@testing-library/react';
import { Destination } from '.';
import { ContextType } from '@/types';
import { renderComponent } from '@/utils';

const mockDataContext: ContextType = {
    data: {
        crew: [],
        technology: [],
        destinations: [
            { name: 'Destination 1', image: 'image1.jpg', description: 'Description 1', distance: '100km', travel: '2 hours' },
            { name: 'Destination 2', image: 'image2.jpg', description: 'Description 2', distance: '200km', travel: '3 hours' },
        ]
    }
};

describe('Destination component', () => {
    test('renders component with default destination', () => {
        const { getByText, getByAltText, getAllByText } = renderComponent(<Destination />, mockDataContext);

        expect(getByText('PICK YOUR DESTINATION')).toBeInTheDocument();
        expect(getByAltText('Destination 1')).toBeInTheDocument();
        expect(getAllByText('Destination 1')[0]).toHaveClass('active');
        expect(getByText('Description 1')).toBeInTheDocument();
        expect(getByText('AVG. DISTANCE')).toBeInTheDocument();
        expect(getByText('100km')).toBeInTheDocument();
        expect(getByText('EST. TRAVEL TIME')).toBeInTheDocument();
        expect(getByText('2 hours')).toBeInTheDocument();
    });

    test('changes current destination when clicking on another destination', () => {
        const { getByText, getByAltText, getAllByText } = renderComponent(<Destination />, mockDataContext);

        fireEvent.click(getByText('Destination 2'));

        expect(getByAltText('Destination 2')).toBeInTheDocument();
        expect(getAllByText('Destination 2')[0]).toHaveClass('active');
        expect(getByText('Description 2')).toBeInTheDocument();
        expect(getByText('AVG. DISTANCE')).toBeInTheDocument();
        expect(getByText('200km')).toBeInTheDocument();
        expect(getByText('EST. TRAVEL TIME')).toBeInTheDocument();
        expect(getByText('3 hours')).toBeInTheDocument();
    });
});