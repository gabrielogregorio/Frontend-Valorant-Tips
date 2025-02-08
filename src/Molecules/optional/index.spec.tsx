import { Optional, OptionalVariantEnum } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('Optional', () => {
  it('should render a default variant', async () => {
    const { container } = render(
      <>
        <Optional variant={OptionalVariantEnum.Default} className="example-custom-class" />
      </>,
    );

    const component = screen.getByText('(Opcional)').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('example-custom-class');
    expect(component).toHaveClass(' text-content-fg-placeholder');
  });

  it('should render a disable variant', async () => {
    const { container } = render(
      <>
        <Optional variant={OptionalVariantEnum.Disabled} />
      </>,
    );

    const component = screen.getByText('(Opcional)').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-content-fg-disabled');
  });

  it('should render a error variant', async () => {
    const { container } = render(
      <>
        <Optional variant={OptionalVariantEnum.Error} />
      </>,
    );

    const component = screen.getByText('(Opcional)').closest('div');

    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('text-feedback-error-hard');
  });
});
