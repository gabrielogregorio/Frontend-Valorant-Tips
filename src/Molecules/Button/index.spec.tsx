import { Button, ButtonVariantEnum } from '.';
import { render, screen, click } from '../../libs/test-utils/test-utils';

describe('Button', () => {
  it('should render a primary variant and click', async () => {
    const clickFunction = jest.fn();
    render(
      <Button variant={ButtonVariantEnum.Primary} onClick={clickFunction}>
        Example
      </Button>,
    );

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toHaveClass('bg-primary');
    expect(component).toBeEnabled();
    expect(clickFunction).toHaveBeenCalledTimes(0);

    await click(component);

    expect(clickFunction).toHaveBeenCalledTimes(1);
  });

  it('should render a secondary variant and click', async () => {
    const clickFunction = jest.fn();
    render(
      <Button variant={ButtonVariantEnum.Secondary} onClick={clickFunction}>
        Example
      </Button>,
    );

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toHaveClass('bg-secondary');
    expect(component).toBeEnabled();
    expect(clickFunction).toHaveBeenCalledTimes(0);

    await click(component);

    expect(clickFunction).toHaveBeenCalledTimes(1);
  });

  it('should render a text variant and click', async () => {
    const clickFunction = jest.fn();
    render(
      <Button variant={ButtonVariantEnum.Text} onClick={clickFunction}>
        Example
      </Button>,
    );

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toBeEnabled();
    expect(clickFunction).toHaveBeenCalledTimes(0);

    await click(component);

    expect(clickFunction).toHaveBeenCalledTimes(1);
  });

  it('should render any variant disabled and try click', async () => {
    const clickFunction = jest.fn();
    render(
      <Button variant={ButtonVariantEnum.Primary} onClick={clickFunction} disabled>
        Example
      </Button>,
    );

    const component = screen.getByRole('button');

    expect(component).toBeInTheDocument();
    expect(component.tagName).toBe('BUTTON');
    expect(component).toHaveClass('bg-primary');
    expect(component).toBeDisabled();
    expect(clickFunction).toHaveBeenCalledTimes(0);

    await click(component);

    expect(clickFunction).toHaveBeenCalledTimes(0);
  });
});
