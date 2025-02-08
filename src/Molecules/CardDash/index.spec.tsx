import { CardDash } from '.';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('CardDash', () => {
  it('should render a default card', async () => {
    render(<CardDash title="example-title" value={130} />);

    const component = screen.getByTestId('card-dash');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('bg-accent-radiant');
  });

  it('should render card with custom classes', async () => {
    render(<CardDash title="example-title" className="example-custom-class" value={130} />);

    const component = screen.getByTestId('card-dash');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('example-custom-class');
  });
});
