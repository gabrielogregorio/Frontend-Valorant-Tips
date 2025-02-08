import { TextFieldBase } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { render, screen, type } from '../../libs/test-utils/test-utils';

describe('TextFieldBase', () => {
  it('should render a default variant', async () => {
    const fn = jest.fn();
    const { container } = render(
      <TextFieldBase
        id="example"
        label="label-example"
        name="name"
        value="value"
        onChange={(e) => fn(e.target.value)}
      />,
    );

    const component = screen.getByRole('textbox', { name: /label-example/i });

    expect(await a11yValidations(container)).toHaveNoViolations();
    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('INPUT');
    expect(component).toHaveClass('text-content-fg');
  });

  it('should type text field base', async () => {
    const fn = jest.fn();
    render(
      <TextFieldBase
        id="example"
        label="label-example"
        name="name"
        value="value"
        onChange={(e) => fn(e.target.value)}
      />,
    );

    const component = screen.getByRole('textbox', { name: /label-example/i });
    await type(component, 'abcExample');

    expect(fn).toBeCalledWith('valuea');
    expect(fn).toBeCalledWith('valueb');
    expect(fn).toBeCalledWith('valuec');
  });
});
