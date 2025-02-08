import { Text, TextVariantEnum } from '../../Atoms/Text';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-content-bg w-full">
      <div className="max-w-content-desktop w-full py-3xl flex flex-col gap-xl">
        <Text className='text-content-fg' variant={TextVariantEnum.h2}>Sobre esse projeto</Text>
        <Text className='text-content-fg'>
          Esse é um projeto feito por fãs do Valorant, com intenção de aumentar a qualidade das gameplays do nosso
          cenário. Ele foi criado seguindo a política do Lenga-Lenga Jurídico da Riot Games com recursos pertencentes à
          Riot Games. A Riot Games não endossa ou patrocina este projeto.
        </Text>
      </div>
    </footer>
  );
};
