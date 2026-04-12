
Meu Portfólio — CIn/UFPE
Site pessoal desenvolvido como atividade prática da disciplina de Desenvolvimento de Software (DS) no Centro de Informática da UFPE.
 Página no CIn: https://cin.ufpe.br/~eucn
 Repositório: https://github.com/edisiouchoacn-spec/my_page

Reflexões de Aprendizado
# Abordagem de construção
    Escolhi o Vite como ferramenta de build por ser mais moderno e rápido que o Create React App (CRA). O Vite inicializa o projeto em milissegundos e atualiza o navegador automaticamente ao salvar qualquer arquivo (HMR - Hot Module Replacement), o que tornou o desenvolvimento muito mais fluido. A escolha também foi guiada pelo fato de ser a ferramenta mais recomendada atualmente para novos projetos React.

# Principais dificuldades

    Configuração do ambiente no Windows: O PowerShell bloqueava a execução de scripts do npm por política de segurança. A solução foi usar o CMD no lugar do PowerShell, o que não foi imediatamente óbvio para um iniciante.
    Entender JSX: A mistura de JavaScript com HTML dentro de um mesmo arquivo foi inicialmente confusa. Entender que JSX é apenas uma sintaxe especial que o React converte para JavaScript levou algum tempo.
    Estrutura de arquivos: A quantidade de arquivos gerados pelo Vite (node_modules, vite.config.js, eslint.config.js, etc.) foi intimidante no início. Entender quais arquivos realmente importavam para o desenvolvimento foi um processo gradual.
    CSS inline no React: A sintaxe de estilos inline com style={{ propriedade: 'valor' }} com duplas chaves foi estranha no começo — uma para indicar JavaScript e outra para o objeto de estilos.
    Erros de maiúscula/minúscula: O Windows não diferencia maiúsculas de minúsculas em nomes de arquivos, mas o React sim. Isso gerou erros difíceis de identificar no início.
    React Router: Configurar a navegação entre páginas com BrowserRouter, Routes e Route exigiu entender um novo conceito de roteamento que não existe no HTML puro.


# Principais aprendizados

    Entendi o que é um componente React, uma função JavaScript que retorna JSX (uma interface visual).
    Aprendi a diferença entre SPA e MPA e como o React Router permite criar uma MPA dentro de um projeto React.
    Compreendi o papel do npm como gerenciador de pacotes e o que significa instalar dependências.
    Aprendi a usar CSS inline em React e como propriedades como display: flex, position: absolute e borderRadius afetam o layout.
    Entendi o fluxo completo de desenvolvimento: escrever código → salvar → ver no navegador em tempo real.
    Aprendi que o node_modules nunca vai para o GitHub graças ao .gitignore.


# Uso de IA
    Utilizei o Claude (Anthropic) como assistente durante todo o desenvolvimento desta atividade. Como era minha primeira vez tocando em React, Vite e no ecossistema JavaScript moderno, a IA foi essencial para:

    Explicar conceitos do zero: Sempre que eu não entendia algo, como o que é JSX, o que é export default, ou por que o node_modules é tão grande,eu perguntava e recebia explicações claras e contextualizadas.
    Depurar erros em tempo real: Vários erros apareceram ao longo do desenvolvimento (scripts bloqueados no PowerShell, tags JSX mal fechadas, nomes de funções inconsistentes, etc.). A IA identificava o problema a partir do print ou da mensagem de erro e explicava a causa.
    Conduzir no ritmo certo: Ao invés de receber tudo pronto de uma vez, solicitei que a IA me guiasse passo a passo, explicando o porquê de cada ação. Isso foi fundamental para o aprendizado real.
    Gerar e ajustar conteúdo: Os textos de apresentação pessoal, trajetória acadêmica e descrições dos projetos foram elaborados em conjunto com a IA a partir das minhas informações pessoais.

    A experiência mostrou que ferramentas de IA, quando usadas com intenção de aprender e não apenas de copiar, podem ser grandes aliadas no processo de aprendizado técnico.

# Tecnologias utilizadas

React
Vite
React Router DOM
CSS inline