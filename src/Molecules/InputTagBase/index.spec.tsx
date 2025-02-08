import { InputTagBase, InputTagBaseVariantEnum } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen, type } from '../../libs/test-utils/test-utils';

describe('InputTagBase', () => {
  it('should render a default variant', async () => {
    const fn = jest.fn();
    const { container } = render(
      <InputTagBase
        id="example"
        variant={InputTagBaseVariantEnum.Adding}
        label="label-example"
        name="name"
        value={{
          isVisible: true,
          value: '',
        }}
        onChange={(value) => fn(value)}
      />,
    );

    const component = screen.getByRole('textbox', { name: /label-example/i });

    expect(await a11yValidations(container)).toHaveNoViolations();
    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('INPUT');
    expect(component).toHaveClass('text-content-fg');
  });

  it('should render a update and visible variant', async () => {
    const fn = jest.fn();
    const { container } = render(
      <InputTagBase
        id="example"
        variant={InputTagBaseVariantEnum.Updating}
        label="label-example"
        name="name"
        value={{
          isVisible: true,
          value: '',
        }}
        onChange={(value) => fn(value)}
      />,
    );

    screen.getByRole('textbox', { name: /label-example/i });

    expect(await a11yValidations(container)).toHaveNoViolations();
  });

  it('should render a update and hidden variant', async () => {
    const fn = jest.fn();
    const { container } = render(
      <InputTagBase
        id="example"
        variant={InputTagBaseVariantEnum.Updating}
        label="label-example"
        name="name"
        value={{
          isVisible: false,
          value: '',
        }}
        onChange={(value) => fn(value)}
      />,
    );

    screen.getByRole('textbox', { name: /label-example/i });

    expect(await a11yValidations(container)).toHaveNoViolations();
  });
});
