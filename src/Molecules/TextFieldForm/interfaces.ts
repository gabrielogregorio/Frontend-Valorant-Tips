import { CustomFieldValues } from '../../@types/CustomFieldValues';
import { TextFieldBaseProps } from '../TextFieldBase';

export interface TextFieldFormProps<T extends CustomFieldValues>
  extends Omit<Omit<TextFieldBaseProps, 'value'>, 'onChange'> {
  name: Extract<keyof T, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}
