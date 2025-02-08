import { CustomFieldValuesBoolean } from '../../@types/CustomFieldValues';
import { CheckboxBaseProps } from '../CheckboxBase';

export interface CheckboxFormProps<T extends CustomFieldValuesBoolean>
  extends Omit<Omit<CheckboxBaseProps, 'value'>, 'onChange'> {
  name: Extract<keyof T, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}
