import { ErrorMessage } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('ErrorMessage', () => {
  it('should render a default variant', async () => {
    const { container } = render(<ErrorMessage text="ExampleErrorMessage" />);

    const component = screen.getByRole('alert');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-feedback-error-hard');
    expect(component).toHaveClass('bg-feedback-error-soft');
  });
});
