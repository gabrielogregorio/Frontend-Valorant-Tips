import { JSX } from 'react';
import { TextFieldFormExternal } from '../../libs/react-hook-form/TextFieldForm';
import { TextFieldFormProps } from './interfaces';
import { CustomFieldValues } from '../../@types/CustomFieldValues';

export const TextFieldForm: <T extends CustomFieldValues>(props: TextFieldFormProps<T>) => JSX.Element = (props) => {
  return <TextFieldFormExternal {...props} />;
};
