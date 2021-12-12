import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import TodoList from './TodoList.js';

/** mock uuid with an incrementing id starting from 0
 * from: https://medium.com/@tommybernaciak/a-missing-jest-mock-feature-b89b74d7a09c
 */
 jest.mock('uuid', () => ({
    v4: jest.fn().mockImplementation(
      (function(n) {
        return function() {
          return ++n;
        };
      })(0)
    )
}));

describe('TodoList component', () => {
    test('smoke test: renders component', () => {
        render(<TodoList />);
    });

    test('snapshot test', () => {
        const { asFragment } = render(<TodoList text={'test text'} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('adds new task', () => {
        const {
            queryAllByTestId,
            queryByTestId,
            queryByText
        } = render(<TodoList />);

        expect(queryAllByTestId('task').length).toBe(0);

        const btn = queryByText('Add Task');
        const input = queryByTestId('text-input');

        fireEvent.change(input, { target: { value: 'TEST' } });
        fireEvent.click(btn);

        expect(queryAllByTestId('task').length).toBe(1);
    });

    test('removes task', () => {
        const {
            queryAllByTestId,
            queryByTestId
        } = render(<TodoList initialData={[{ id: 1, text: 'TEST' }]} />);

        expect(queryAllByTestId('task').length).toBe(1);

        const btn = queryByTestId('remove-btn');
        fireEvent.click(btn);
        
        waitForElementToBeRemoved(queryByTestId('task')).then(() => {
            expect(queryAllByTestId('task').length).toBe(0);
        });
        
    });
});