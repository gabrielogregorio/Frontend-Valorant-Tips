import { render, screen } from '../../libs/test-utils/test-utils';
import { NotFound } from '.';
import * as formatI18nMap from '../../libs/i18n';
import { a11yValidations } from '../../libs/test-utils/a11y';

const mock = jest.spyOn(formatI18nMap, 'formatI18n');
mock.mockImplementation((value) => value);

describe('NotFound', () => {
  it('should render a default NotFound', async () => {
    const { container } = render(<NotFound className="custom-class" />);

    expect(screen.getByText('message.notFoundKillJoy')).toBeInTheDocument();
    expect(screen.getByAltText('alt.kjUsingNotebookKingdom')).toBeInTheDocument();

    expect(screen.getByTestId('not-found')).toHaveClass('custom-class');

    expect(await a11yValidations(container)).toHaveNoViolations();
  });
});
