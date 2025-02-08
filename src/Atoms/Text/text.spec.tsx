import { Text, TextVariantEnum } from '.';
import { render, screen } from '../../libs/test-utils/test-utils';

describe('Text', () => {
  it('should render default variant', () => {
    render(<Text>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveClass('text-[16px]');
  });

  it('should render 6xl variant', () => {
    render(<Text variant={TextVariantEnum['6xl']}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('SPAN');
    expect(textComponent).toHaveClass('text-[36px]');
  });


  it('should render 9xl variant', () => {
    render(<Text variant={TextVariantEnum['9xl']}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('SPAN');
    expect(textComponent).toHaveClass('text-[56px]');
  });


  it('should render button variant', () => {
    render(<Text variant={TextVariantEnum.button}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('SPAN');
    expect(textComponent).toHaveClass('text-[16px]');
  });

  it('should render h1 variant', () => {
    render(<Text variant={TextVariantEnum.h1}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('H1');
    expect(textComponent).toHaveClass('text-[24px]');
  });

  it('should render h2 variant', () => {
    render(<Text variant={TextVariantEnum.h2}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('H2');
    expect(textComponent).toHaveClass('text-[20px]');
  });

  it('should render h2Highlight variant', () => {
    render(<Text variant={TextVariantEnum.h2Highlight}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('H2');
    expect(textComponent).toHaveClass('text-[20px]');
  });

  it('should render link variant', () => {
    render(<Text variant={TextVariantEnum.link}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('SPAN');
    expect(textComponent).toHaveClass('text-[16px]');
  });

  it('should render subtext variant', () => {
    render(<Text variant={TextVariantEnum.subtext}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('SPAN');
    expect(textComponent).toHaveClass('text-[12px]');
  });

  it('should render text variant', () => {
    render(<Text variant={TextVariantEnum.text}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveClass('text-[16px]');
  });

  it('should render textBold variant', () => {
    render(<Text variant={TextVariantEnum.textBold}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveClass('text-[16px]');
    expect(textComponent).toHaveClass('font-semibold');
  });

  it('should render textUnderline variant', () => {
    render(<Text variant={TextVariantEnum.textUnderline}>Example</Text>);

    const textComponent = screen.getByText('Example');

    expect(textComponent).toBeInTheDocument();
    expect(textComponent.tagName).toBe('P');
    expect(textComponent).toHaveClass('text-[16px]');
    expect(textComponent).toHaveClass('underline');
  });
});
