import { useEffect, useRef, ReactElement, RefObject } from 'react';
import { useController } from 'react-hook-form';
import { CheckboxFormProps } from '../../../Molecules/CheckboxForm/interfaces';
import { CheckboxBase } from '../../../Molecules/CheckboxBase';
import { CustomFieldValuesBoolean } from '../../../@types/CustomFieldValues';

export const CheckboxFormExternal = <T extends CustomFieldValuesBoolean>({
  name,
  control,
  onBlur,
  onFocus,
  errorMessage,
  ...rest
}: CheckboxFormProps<T>): ReactElement => {
  const wrapperRefInput: RefObject<HTMLInputElement | null> = useRef(null);
  const {
    field: { value, onChange: onChangeHookForm, onBlur: onBlurHookForm, ref },
    fieldState: { error },
  } = useController<CustomFieldValuesBoolean>({
    name,
    control,
  });

  useEffect(() => {
    const setRefInHookForm = (): void => {
      ref(wrapperRefInput?.current);
    };

    setRefInHookForm();
  }, [ref]);

  const errorMessageHandled = error?.message || errorMessage;

  return (
    <CheckboxBase
      ref={wrapperRefInput}
      isChecked={value}
      errorMessage={errorMessageHandled}
      onFocus={(event) => {
        onFocus?.(event);
      }}
      onBlur={(event) => {
        onBlurHookForm();
        onBlur?.(event);
      }}
      name={name}
      onChange={(event) => onChangeHookForm(event.target.checked)}
      {...rest}
    />
  );
};
