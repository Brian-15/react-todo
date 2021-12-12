import { render } from '@testing-library/react';
import Todo from './Todo.js';

describe('Todo component', () => {
    test('smoke test: renders component', () => {
        render(<Todo text={'test text'} />);
    });

    test('snapshot test', () => {
        const { asFragment } = render(<Todo text={'test text'} />);
        expect(asFragment()).toMatchSnapshot();
    });
});