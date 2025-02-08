import { LoadingMessage } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('LoadingMessage', () => {
  it('should render a default variant', async () => {
    const { container } = render(<LoadingMessage text="ExampleLoadingMessage" />);

    const component = screen.getByRole('alert');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-content-fg-contrast');
    expect(component).toHaveClass('bg-secondary-soft');
  });
});
