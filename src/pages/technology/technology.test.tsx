import { fireEvent } from '@testing-library/react';
import { Technology } from '.';
import { ContextType } from '@/types';
import { renderComponent } from '@/utils';

const mockDataContext: ContextType = {
    data: {
        crew: [],
        technology: [
            { name: 'Technology 1', images: { portrait: "imagePortrait1.jpg", landscape: "imageLandscape1.jpg" }, description: 'Description 1' },
            { name: 'Technology 2', images: { portrait: "imagePortrait2.jpg", landscape: "imageLandscape2.jpg" }, description: 'Description 2' },
        ],
        destinations: []
    }
};

describe('Technology component', () => {
    test('renders component with default technology', () => {
        const { getByText, getByAltText } = renderComponent(<Technology />, mockDataContext);

        expect(getByText('SPACE LAUNCH 101')).toBeInTheDocument();
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('THE TERMINOLOGY…')).toBeInTheDocument();
        expect(getByText('Technology 1')).toBeInTheDocument();
        expect(getByAltText('Technology 1')).toBeInTheDocument();
    });

    test('changes current technology when clicking on another technology', () => {
        const { getByText, getByAltText } = renderComponent(<Technology />, mockDataContext);

        fireEvent.click(getByText('2'));

        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('THE TERMINOLOGY…')).toBeInTheDocument();
        expect(getByText('Technology 2')).toBeInTheDocument();
        expect(getByAltText('Technology 2')).toBeInTheDocument();
    });
});