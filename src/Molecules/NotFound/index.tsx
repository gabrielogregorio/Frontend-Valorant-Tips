import { Text, TextVariantEnum } from '../../Atoms/Text';
import { formatI18n } from '../../libs/i18n';
import { Image } from '../../libs/image';
import { mergeClasses } from '../../libs/mergeClasses';

interface Props {
  className?: string;
}

export const NotFound = ({ className = '' }: Props) => {
  return (
    <div className={mergeClasses(`flex gap-3xl items-center`, className)} data-testid="not-found">
      <Image
        src={'/images/kj-in-notebook-kingdom.png'}
        width={100}
        className="select-none"
        height={140}
        alt={formatI18n('alt.kjUsingNotebookKingdom')}
        aria-hidden
        draggable={false}
      />

      <Text variant={TextVariantEnum.text} className="text-content-fg">
        {formatI18n('message.notFoundKillJoy')}
      </Text>
    </div>
  );
};
