import { JSX } from 'react';
import { InputTagFormExternal } from '../../libs/react-hook-form/InputTagForm';
import { InputTagFormProps } from './interfaces';
import { CustomFieldValues } from '../../@types/CustomFieldValues';

export const InputTagForm: <T extends CustomFieldValues>(props: InputTagFormProps<T>) => JSX.Element = (props) => {
  return <InputTagFormExternal {...props} />;
};
