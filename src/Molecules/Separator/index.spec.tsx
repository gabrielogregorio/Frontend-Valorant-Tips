import { Separator } from '.';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('Separator', () => {
  it('should render a default variant', async () => {
    render(<Separator />);

    const component = screen.getByTestId('separator');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('HR');
    expect(component).toHaveClass('border-border-soft');
  });
});
