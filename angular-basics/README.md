# Angular basics

Aprendizado das características mais básicas do angular.

## 1. Configuração

---
Para iniciar o desenvolvimento de SPA's com o angular, é necessário pelo menos três ferramentas:

- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://angular.io/cli">Angular CLI</a>
- NPM | <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">YARN</a>

### Node
O node é o responsável pela interpretação de código javascript que iremos desenvolver.

### Npm | Yarn
Ambos são gerenciadores de pacote e são responsáveis por baixar dependências na sua aplicação, 
o **NPM** é provido oficialmente através do **NODE** ao realizar o download do mesmo. 
O **YARN** pode ser baixado através do NPM.

### Angular CLI
Ferramenta de linha de comando que permite a criação de novos SPA's, componentes, módulos, etc. 
Voltado ao angular, é extremamente importante pois facilita o desenvolvimento de aplicações angular.

## 2. Criação do primeiro projeto

---

Para criar um projeto angular e começar a desenvolver aplicações, podemos utilizar o seguinte 
comando através do angular CLI:

`ng new <nome-da-aplicação>`

Podemos aplicar algumas configurações básicas como adicionar rotas e definir se usaremos ou não
algum dos mais famosos pre-processadores CSS.

`ng new <nome-da-aplicação> --routing --style="SCSS"`
