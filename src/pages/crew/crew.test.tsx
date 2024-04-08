import { fireEvent } from '@testing-library/react';
import { Crew } from '.';
import { ContextType } from '@/types';
import { renderComponent } from '@/utils';

const mockDataContext: ContextType = {
    data: {
        crew: [
            { name: 'Crew 1', image: 'image1.jpg', role: 'Pilot', bio: 'bio 1' },
            { name: 'Crew 2', image: 'image2.jpg', role: 'Captain', bio: 'bio 2' },
        ],
        technology: [],
        destinations: []
    }
};

describe('Crew component', () => {
    test('renders component with default crew', () => {
        const { getByText, getByAltText, getAllByRole } = renderComponent(<Crew />, mockDataContext);

        expect(getByText('MEET YOUR CREW')).toBeInTheDocument();
        expect(getByText('Pilot')).toBeInTheDocument();
        expect(getByText('Crew 1')).toBeInTheDocument();
        expect(getByText('bio 1')).toBeInTheDocument();
        expect(getAllByRole('listitem')[0]).toHaveClass('active');
        expect(getByAltText('Crew 1')).toBeInTheDocument();
    });

    test('changes current crew when clicking on another destination', () => {
        const { getByText, getByAltText, getAllByRole } = renderComponent(<Crew />, mockDataContext);

        fireEvent.click(getAllByRole('listitem')[1]);

        expect(getByText('Captain')).toBeInTheDocument();
        expect(getByText('Crew 2')).toBeInTheDocument();
        expect(getByText('bio 2')).toBeInTheDocument();
        expect(getAllByRole('listitem')[1]).toHaveClass('active');
        expect(getByAltText('Crew 2')).toBeInTheDocument();
    });
});