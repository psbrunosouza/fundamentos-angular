# Angular primeiro projeto

Aprendizado das características mais básicas do angular.

## 1. Configuração

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

Para criar um projeto angular e começar a desenvolver aplicações, podemos utilizar o seguinte 
comando através do angular CLI:

`ng new <nome-da-aplicação>`

Podemos aplicar algumas configurações básicas como adicionar rotas e definir se usaremos ou não
algum dos mais famosos pre-processadores CSS.

_Estilos póssíveis: css|scss|sass|less|styl_

`ng new <nome-da-aplicacao> --routing --style="SCSS"`

Para iniciar o projeto em um servidor local, utilizamos o comando:

`ng serve`

## 3. Módulos

Um módulo pode ser entendido como um bloco de código que define um domínio dentro da aplicação,
a exemplo: Em uma aplicação voltada a saúde, podemos ter, pacientes, médicos, convênios. E para cada
um deles podemos criar módulos para melhorar a organização do nosso código. 
Os módulos também são conjuntos de componentes e diretívas.

`ng generate module <nome-do-modulo>`

Caso o módulo necessite da estrutura de rotas, devemos usar o seguinte comando:

`ng generate module <nome-do-modulo> --routing`

### Metadados

Os módulos possuem um decorator chamado @NgModule, que permite relizar algumas configurações
essenciais ao módulo:

- **Declarations**: Permite informar os componentes vinculados aquele módulo
- **Imports**: Permite a importação outros módulos
- **Exports**: Informa quais componentes são exportados para serem usados por outros módulos durante
  importação
- **Providers**: Permite declarar serviços a serem usados dentro do escopo do módulo
- **Bootstrap**: Está presente apenas no app-module e tem o papel de definir qual o componente que inicia
  a aplicação

```typescript
// modulo app
@NgModule({
  declarations: [AppComponent],
  imports: [],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
```
## 4. Componentes

Um componente é uma classe em uma aplicação angular, que pode definir uma página da sua aplicação, 
ou algum item menor como um componente de input personalizado, uma lista, botão, etc.

`ng generate component <nome-do-componente>`

Caso já exista uma página de mesmo nome do componente, podemos criar o componente dentro dessa pasta
usando a flag --flat.

_a flag --flat pode ser utilizada também na criação de outras estruturas, 
caso já exista uma pasta._

`ng generate component <nome-do-componente> --flat`

### Metadados

Os componentes possuem um decorator de classe chamado @Component, ele permite realizar
algumas configurações no módulo como:

- **selector**: Definir o nome do componente como elemento html
- **templateUrl**: permite conectar o component.ts com a pagina html
- **styleUrls**: Permite conectar o component.ts com a página de estilo
- **template**: Permite carregar html diretamente no component.ts

```typescript
// componente app
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
```





