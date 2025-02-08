import Link from 'next/link';
import { Text, TextAsEnum, TextVariantEnum } from '../../Atoms/Text';
import { mergeClasses } from '../../libs/mergeClasses';
import { useMemo } from 'react';
import { RouteScreensEnum } from '../../@types/routeScreenEnum';

const getVariantStyles = (active: boolean) => {
  if (active) {
    return { styles: 'underline font-bold', variant: TextVariantEnum.h2Highlight };
  }

  return { styles: '', variant: TextVariantEnum.h2 };
};

const NavItem = ({ active = false, text, href }: { active?: boolean; text: string; href: string }) => {
  const variantStyles = useMemo(() => getVariantStyles(active), [active]);

  return (
    <Link
      href={href}
      className={mergeClasses(`whitespace-nowrap text-content-fg-contrast`, variantStyles.styles)}
      aria-selected={active}>
      <Text className="text-content-fg-contrast" variant={variantStyles.variant}>
        {text}
      </Text>
    </Link>
  );
};

export const PublicHeader = () => {
  return (
    <header className="bg-primary flex text-center desktop:text-left items-center justify-between flex-col desktop:flex-row min-h-[96px] gap-7xl desktop:gap-0 px-lg py-lg desktop:px-6xl desktop:py-6xl w-full">
      <Link href={RouteScreensEnum.root}>
        <Text variant={TextVariantEnum['6xl']} as={TextAsEnum.span} className="w-full text-content-fg-contrast">
          VALORANT TIPS
        </Text>
      </Link>
      <nav aria-label="Menu Principal" className="flex gap-3xl flex-col desktop:flex-row">
        <NavItem active href={RouteScreensEnum.root} text="INICIO" />
      </nav>
    </header>
  );
};
