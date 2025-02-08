import { JSX } from 'react';
import { CheckboxFormProps } from './interfaces';
import { CustomFieldValuesBoolean } from '../../@types/CustomFieldValues';
import { CheckboxFormExternal } from '../../libs/react-hook-form/CheckboxFormExternal';

export const CheckboxForm: <T extends CustomFieldValuesBoolean>(props: CheckboxFormProps<T>) => JSX.Element = (
  props,
) => {
  return <CheckboxFormExternal {...props} />;
};
