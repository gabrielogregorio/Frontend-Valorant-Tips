import { HelpText, HelpTextVariantEnum } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('HelpText', () => {
  it('should render a default variant', async () => {
    const { container } = render(
      <>
        <HelpText variant={HelpTextVariantEnum.Default} text="Example" />
      </>,
    );

    const component = screen.getByText('Example').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-content-fg-subcontent');
  });

  it('should render a disable variant', async () => {
    const { container } = render(
      <>
        <HelpText variant={HelpTextVariantEnum.Disabled} text="Example" />
      </>,
    );

    const component = screen.getByText('Example').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-content-fg-disabled');
  });

  it('should render a error variant', async () => {
    const { container } = render(
      <>
        <HelpText variant={HelpTextVariantEnum.Error} text="Example" />
      </>,
    );

    const component = screen.getByText('Example').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-feedback-error-hard');
  });
});
