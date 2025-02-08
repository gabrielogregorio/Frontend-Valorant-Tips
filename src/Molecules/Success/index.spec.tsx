import { SuccessMessage } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('SuccessMessage', () => {
  it('should render a default variant', async () => {
    const { container } = render(<SuccessMessage text="ExampleSuccessMessage" />);

    const component = screen.getByRole('alert');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-feedback-success-hard');
    expect(component).toHaveClass('bg-feedback-success-soft');
  });
});
