import {render, screen} from '@testing-library/react';
import StateLogin from './components/StateLogin';

describe('StateLogin Component', () => {
    test('renders login form', () => {
        render(<StateLogin/>);

        // Find form elements and make assertions
        expect(screen.getByRole('heading', {name: /login/i})).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
});