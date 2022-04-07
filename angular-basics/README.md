# Angular conceitos básicos

Aprendizado de estruturas básicas do angular
- Importando módulos
- Utilizando componentes
- Estruturas condicionais
  - ngIf
  - ngSwitch
- Estruturas de repetição
  - ngFor

## 1. Importação de módulos e uso de componentes

No angular todo componente pode ser utilizado como um elemento html, além disso, os módulos possuem
o papel de agregar conjuntos de componentes e podemos importar esses módulos para utlizar esses
componentes onde desejarmos.

Para que os componentes deu um módulo possam ser utlizados, eles precisam ser, 
exportados como no exemplo abaixo:

```typescript
// dentro do dashboard modulo
@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent // módulo dashboard sendo exportado
  ],
  imports: [
    CommonModule
  ]
})
```

E para utilizarmos no módulo desejado, podemos importar da seguinte forma:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule // importando o dashboard module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
No nosso HTML podemos utilizar o componente como um elemento html baseado em seu seletor:

```html
<!-- Importando o componente app-dashboard dentro do html do componente app -->
<app-dashboard></app-dashboard>
```

## 2. Diretivas Condicionais

### ngIf

A diretiva ngIf é fundamental no desenvolvimento com angular, pois permite criar estruturas
condicionais no template html.

Podemos utiliza-lo da forma abaixo:

```html
<span *ngIf="award >= 5">
  Esse texto será exibido apenas se o Brasil possuir 
  5 títulos ou mais no futebol mundial
</span>
```
Podemos carregar outra estrutura caso essa condição não seja atendida, utilizando o nosso bom
e velho "else", para isso precisamos utilizar o ng-template, atribuindo uma variável no mesmo e a 
utilizando na nossa chamada do else:

```html
<span *ngIf="award >= 5; else brasilHasLessThanFive">
  Esse texto será exibido apenas se o Brasil possuir 
  5 títulos no futebol mundial
</span>
<ng-template #brasilHasLessThanFive>
  <span>
    Esse texto será exibido caso o Brasil possua menos que 5 títulos no futebol mundial
  </span>
</ng-template>
```

### ngSwitch

O ngSwitch funciona como o switch case do Javascript, e permite avaliar um valor passado e 
renderizar o conteúdo conforme o seu resultado.

```html
<div [ngSwitch]="color">
  <h3>Qual a cor da camisa da seleção brasileira?</h3>
  <span *ngSwitchCase="'yellow'">Amarela</span>
  <span *ngSwitchCase="'red'">Vermelha</span>
</div>
```

## 3. Diretiva de Laços

Loops / laços, são essenciais em qualquer linguagem e não diferiria com o angular,
podemos realizar loops através dos componentes, para trabalhar principalmente com listas
de informações:

```html
<div>
  <h3>Em quais anos o Brasil ganhou a copa do mundo?</h3>
  <div *ngFor="let year of years">
    <span>{{year}}</span>
  </div>
</div>
```

Além disso, podemos também capturar o index da coleção iterada: 

```html
<div>
  <h3>Em quais anos o Brasil ganhou a copa do mundo? (com index)</h3>
  <div *ngFor="let year of years; let i = index">
    <span>index: {{i}} -- </span>
    <span>ano: {{year}}</span>
  </div>
</div>
```

## 4. Interpolação

Podemos também exibir conteúdo vindo do nosso arquivo component.ts diretamente no HTML, através
da interpolação "{{}}":

```html
<div>
  <h3>Horário atual: </h3>
  <span>{{hour}}</span>
</div>
```
