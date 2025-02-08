import i18next from 'i18next';
const resources = {
  en: {
    translation: {
      'label.dashboard.countAlAgents': 'Agents',
      'label.dashboard.countAllAccess': 'All access',
      'label.dashboard.countAllPosts': 'Posts',
      'label.dashboard.countAllSuggestions': 'Suggestions',
      'label.dashboard.countAllUsers': 'Users',
      'label.dashboard.countAlMaps': 'Maps',
      'label.dashboard.countIps': 'All access by ip',
      'button.tryAgain': 'Try Again',
      'message.anyError': 'Something went wrong, will you forgive me?',
      'message.notFoundKillJoy':
        'Clean Area! Or worse, without anything, do I need to program my turret to help you in this search?',
      'alt.kjUsingNotebookKingdom': 'killjoy holding a kingdom notebook',
      'placeholder.yourName': 'Seu nome',
      'placeholder.yourUser': 'Seu usuário',
      'helpText.typeYourName': 'Digite o nome que você quer que apareça nos seus posts',
      'helpText.typeYourUsername': 'Digite o usuário  para fazer login no site, isso DEVE SER SEGREDO',
      'label.name': 'NOME',
      'label.username': 'USUÁRIO',
      'msg.error.onFetchUserLogged': 'Erro ao obter dados do usuário logado',
      'label.newPassword': 'A NOVA SENHA',
      'placeholder.newPassword': '*******',
      'label.newConfirmPassword': 'CONFIRME A NOVA SENHA',
      'placeholder.newConfirmPassword': '*******',
    },
  },
  pt: {
    translation: {
      'label.dashboard.countAlAgents': 'Agentes',
      'label.dashboard.countAllPosts': 'Postagens',
      'label.dashboard.countAllSuggestions': 'Sugestões',
      'label.dashboard.countAllUsers': 'Usuários',
      'label.dashboard.countAlMaps': 'Mapas',
      'label.dashboard.countAllAccess': 'Todos os acessos',
      'label.dashboard.countIps': 'todos os acessos por IP',
      'button.tryAgain': 'Tentar Novamente',
      'message.anyError': 'Algo deu errado, você me desculpa?',
      'message.notFoundKillJoy':
        'Área Limpa! Ou pior, sem nada, será que eu preciso programar minha torreta pra te ajudar nessa busca?',
      'alt.kjUsingNotebookKingdom': 'killjoy segurando um notebook kingdom',
      'placeholder.yourName': 'Seu nome',
      'placeholder.yourUser': 'Seu usuário',
      'helpText.typeYourName': 'Digite o nome que você quer que apareça nos seus posts',
      'helpText.typeYourUsername': 'Digite o usuário  para fazer login no site, isso DEVE SER SEGREDO',
      'label.name': 'NOME',
      'label.username': 'USUÁRIO',
      'msg.error.onFetchUserLogged': 'Erro ao obter dados do usuário logado',
      'label.newPassword': 'A NOVA SENHA',
      'placeholder.newPassword': '*******',
      'label.newConfirmPassword': 'CONFIRME A NOVA SENHA',
      'placeholder.newConfirmPassword': '*******',
    },
  },
};

i18next.init({
  lng: 'pt',
  debug: true,
  resources,
});

export type formatI18nMap = keyof typeof resources.pt.translation;

export const formatI18n = (key: formatI18nMap): string => {
  return i18next.t(key);
};
