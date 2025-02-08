import { JSX } from 'react';
import { LoadImageFormExternal } from '../../libs/react-hook-form/LoadImageForm';
import { LoadImageFormProps } from './interfaces';
import { CustomFieldValues } from '../../@types/CustomFieldValues';

export const LoadImageForm: <T extends CustomFieldValues>(props: LoadImageFormProps<T>) => JSX.Element = (props) => {
  return <LoadImageFormExternal {...props} />;
};
