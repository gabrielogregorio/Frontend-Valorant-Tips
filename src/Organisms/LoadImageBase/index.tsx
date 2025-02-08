'use client';
import { ChangeEvent, SetStateAction } from 'react';
import { Text, TextVariantEnum } from '../../Atoms/Text';
import { Image } from '../../libs/image';
import { Button, ButtonVariantEnum } from '../../Molecules/Button';
import { Skeleton } from '../../Molecules/Skeleton';
import { useHandleState } from '../../shared/hooks/useHandleState';
import { ApiService } from '../../shared/services/ApiService';
import { HelpText, HelpTextVariantEnum } from '../../Molecules/helpText';
import { mergeClasses } from '../../libs/mergeClasses';
import { Label } from '../../Molecules/Label';

export interface LoadImagePropsInterface {
  label: string;
  helpText?: string;
  className?: string;
  errorMessage?: string;
  setErrorMessage?: (value: SetStateAction<string>) => void;
  value?: string;
  onChange?: (value: string) => void;
  id: string;
  name: string;
}

export const LoadImageBase = ({
  id,
  label,
  name,
  value,
  onChange = () => {},
  className = '',
  setErrorMessage = () => {},
  errorMessage,
  helpText,
}: LoadImagePropsInterface) => {
  const { setIsLoading, isLoading } = useHandleState();

  const loadImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) {
      return;
    }
    setIsLoading(true);
    setErrorMessage('');

    const formData = new FormData();

    formData.append('image', event.target.files[0]);

    ApiService.post<{ url: string }>('/uploadImage', formData)
      .then((res) => {
        const urlImg = `${res.data.url}`;
        onChange(urlImg);
        setIsLoading(false);
        return res;
      })
      .catch(() => {
        setErrorMessage('Erro ao realizar upload da imagem');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className={mergeClasses('flex flex-col', className)}>
        <Skeleton className="w-[240px] h-[240px]  rounded-sm"></Skeleton>

        <Text variant={TextVariantEnum.subtext} className="text-content-fg-subcontent">
          carregando imagem...
        </Text>
      </div>
    );
  }

  if (value) {
    return (
      <div className={mergeClasses('flex flex-col', className)}>
        <div>
          <Image
            unoptimized
            src={value}
            width={240}
            height={240}
            alt=""
            className="min-h-[240px] min-w-[240px] object-cover"
          />

          <Button
            className="w-full justify-start min-h-0 py-0 px-0"
            variant={ButtonVariantEnum.Text}
            onClick={() => onChange('')}>
            <Text variant={TextVariantEnum.subtext} className="text-primary">
              remover imagem
            </Text>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={mergeClasses('flex flex-col', className)}>
      <div className="object-cover">
        <div className="w-[245px] h-[249px] bg-loadImage ">
          <Label htmlFor={name} className="hidden" id={id} text={label} />
          <input
            type="file"
            name={name}
            onChange={loadImage}
            className="block opacity-0 overflow-hidden w-full h-full "
          />
        </div>
        {errorMessage ? (
          <HelpText variant={HelpTextVariantEnum.Error} text={errorMessage} />
        ) : (
          <HelpText variant={HelpTextVariantEnum.Default} text={helpText} />
        )}
      </div>
    </div>
  );
};
