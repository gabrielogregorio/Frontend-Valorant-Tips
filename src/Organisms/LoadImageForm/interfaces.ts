import { CustomFieldValues } from '../../@types/CustomFieldValues';
import { LoadImagePropsInterface } from '../LoadImageBase';

export interface LoadImageFormProps<T extends CustomFieldValues>
  extends Omit<Omit<LoadImagePropsInterface, 'value'>, 'onChange'> {
  name: Extract<keyof T, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}
