import { CustomFieldValuesInputTagBaseValue } from '../../@types/CustomFieldValues';
import { InputTagBaseProps } from '../InputTagBase';

export interface InputTagFormProps<T extends CustomFieldValuesInputTagBaseValue>
  extends Omit<Omit<InputTagBaseProps, 'value'>, 'onChange'> {
  name: Extract<keyof T, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}
