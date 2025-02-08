import { Label, LabelVariantEnum } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('Label', () => {
  it('should render a default variant', async () => {
    const { container } = render(
      <>
        <Label variant={LabelVariantEnum.Default} htmlFor="example-id" text="Example" />
        <input id="example-id" />
      </>,
    );

    const component = screen.getByText('Example').closest('label');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('LABEL');
    expect(component).toHaveClass('text-content-fg-subcontent');
    expect(component).toHaveAttribute('aria-disabled', 'false');
  });

  it('should render a error variant', async () => {
    const { container } = render(
      <>
        <Label variant={LabelVariantEnum.Error} htmlFor="example-id" text="Example" />
        <input id="example-id" />
      </>,
    );

    const component = screen.getByText('Example').closest('label');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('LABEL');
    expect(component).toHaveClass('text-feedback-error-hard');
    expect(component).toHaveAttribute('aria-disabled', 'false');
  });

  it('should render a disabled variant', async () => {
    const { container } = render(
      <>
        <Label variant={LabelVariantEnum.Disabled} htmlFor="example-id" text="Example" />
        <input id="example-id" />
      </>,
    );

    const component = screen.getByText('Example').closest('label');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('LABEL');
    expect(component).toHaveClass('text-content-fg-disabled');
    expect(component).toHaveAttribute('aria-disabled', 'true');
  });
});
