import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

describe('BugForm Component', () => {
  it('should call onBugCreated after submitting with valid input', async () => {
    const onBugCreated = jest.fn();

    render(<BugForm onBugCreated={onBugCreated} />);

    fireEvent.change(screen.getByPlaceholderText(/bug title/i), {
      target: { value: 'Test bug' },
    });
    fireEvent.change(screen.getByPlaceholderText(/bug description/i), {
      target: { value: 'Something is broken' },
    });

    fireEvent.click(screen.getByRole('button', { name: /report bug/i }));

    // Wait for onBugCreated to be called
    expect(onBugCreated).toHaveBeenCalled();
  });

  it('should not submit with empty title', () => {
    const onBugCreated = jest.fn();

    render(<BugForm onBugCreated={onBugCreated} />);
    fireEvent.click(screen.getByRole('button', { name: /report bug/i }));

    expect(onBugCreated).not.toHaveBeenCalled();
  });
});
