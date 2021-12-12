import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm.js';

describe('Todo component', () => {
    test('smoke test: renders component', () => {
        render(<NewTodoForm />);
    });

    test('snapshot test', () => {
        const { asFragment } = render(<NewTodoForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});