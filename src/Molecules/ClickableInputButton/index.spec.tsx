import { ClickableInputButton } from '.';
import { a11yValidations } from '../../libs/test-utils/a11y';
import { click, render, screen } from '../../libs/test-utils/test-utils';

describe('ClickableInputButton', () => {
  it('should render a default variant', async () => {
    const clickFunction = jest.fn();
    const { container } = render(
      <>
        <ClickableInputButton
          ariaLabel="close"
          onClick={clickFunction}
          icon="AddOutline"
          className="example-custom-invalid"
          disabled={false}
        />
      </>,
    );

    const component = screen.getByRole('button');
    expect(clickFunction).toHaveBeenCalledTimes(0);
    expect(await a11yValidations(container)).toHaveNoViolations();

    await click(component);
    expect(clickFunction).toHaveBeenCalledTimes(1);
    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toHaveClass('example-custom-invalid');
    expect(component).toBeEnabled();
  });

  it('should render a disabled component', async () => {
    const fn = jest.fn();
    const clickFunction = jest.fn();
    const { container } = render(
      <>
        <ClickableInputButton
          ariaLabel="close"
          onClick={fn}
          icon="AddOutline"
          className="example-custom-invalid"
          disabled
        />
      </>,
    );

    const component = screen.getByRole('button');

    expect(clickFunction).toHaveBeenCalledTimes(0);
    await click(component);
    expect(clickFunction).toHaveBeenCalledTimes(0);
    expect(await a11yValidations(container)).toHaveNoViolations();

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toHaveClass('example-custom-invalid');
    expect(component).toBeDisabled();
  });
});
