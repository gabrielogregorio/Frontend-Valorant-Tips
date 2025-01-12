import { CheckboxBase } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { click, render, screen } from '../../libs/test-utils/test-utils';

describe('CheckboxBase', () => {
  it('should render checked component and unchecked', async () => {
    const fn = jest.fn();
    const { container } = render(
      <CheckboxBase id="example" isChecked label="label-example" name="name" onChange={(e) => fn(e.target.checked)} />,
    );

    const component = screen.getByRole('checkbox', { name: /label-example/i });

    expect(await a11yValidations(container)).toHaveNoViolations();
    expect(component).toBeInTheDocument();
    expect(component).toBeChecked();
    expect(component.tagName).toBe('INPUT');
    await click(component);

    expect(fn).toBeCalledWith(false);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(component).toHaveClass('accent-primary');
  });

  it('should render component unchecked and checked', async () => {
    const fn = jest.fn();
    render(
      <CheckboxBase
        id="example"
        label="label-example"
        name="name"
        isChecked={false}
        onChange={(e) => fn(e.target.checked)}
      />,
    );

    const component = screen.getByRole('checkbox', { name: /label-example/i });
    await click(component);

    expect(fn).toBeCalledWith(true);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(component).not.toBeChecked();
  });

  it('should block update state on component is disabled', async () => {
    const fn = jest.fn();
    render(
      <CheckboxBase
        id="example"
        label="label-example"
        name="name"
        disabled
        isChecked={false}
        onChange={(e) => fn(e.target.checked)}
      />,
    );

    const component = screen.getByRole('checkbox', { name: /label-example/i });
    await click(component);

    expect(fn).toHaveBeenCalledTimes(0);
    expect(component).not.toBeChecked();
  });
});
