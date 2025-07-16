import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BugList from '../components/BugList';

describe('BugList Component', () => {
  it('renders bug items from API', async () => {
    render(<BugList />);

    // Wait for item to appear
    const bugTitle = await screen.findByText(/bug 1/i);
    expect(bugTitle).toBeInTheDocument();
  });

  it('deletes a bug and updates UI', async () => {
    render(<BugList />);

    const deleteBtn = await screen.findByRole('button', { name: /delete/i });
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      expect(screen.queryByText(/bug 1/i)).not.toBeInTheDocument();
    });

    it('shows message when bug list is empty', async () => {
        server.use(
          rest.get('http://localhost:5000/api/bugs', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([]));
          })
        );
      
        render(<BugList />);
        const emptyMsg = await screen.findByText(/no bugs found/i);
        expect(emptyMsg).toBeInTheDocument();
      });
      
  });
});
