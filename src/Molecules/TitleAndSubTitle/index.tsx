import { Text, TextVariantEnum } from '../../Atoms/Text';

export const TitleAndSubtitle = ({ title = '', subtitle = '' }: { title?: string; subtitle?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[600px] w-full">
        {title ? (
          <Text className="text-center text-content-fg" variant={TextVariantEnum.h1}>
            {title}
          </Text>
        ) : undefined}
        {subtitle ? (
          <Text className="text-center text-content-fg" variant={TextVariantEnum.h2}>
            {subtitle}
          </Text>
        ) : undefined}
      </div>
    </div>
  );
};
