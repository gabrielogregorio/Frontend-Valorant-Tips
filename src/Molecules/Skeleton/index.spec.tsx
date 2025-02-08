import { Skeleton } from '.';
import { render } from '../../libs/test-utils/test-utils';

describe('Skeleton', () => {
  it('should render a default variant', async () => {
    const { container } = render(<Skeleton />);

    expect(container).toMatchSnapshot();
  });
});
