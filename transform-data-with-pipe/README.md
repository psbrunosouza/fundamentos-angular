# Transformação de dados com pipe operator

## 1. Pipe

O pipe operator trabalha em conjunto com o template html para proporcionar pequenas, mas importantes,
transformações de dados na aplicação, como, por exemplo: exibir a data num formato coerente,
especificar informação monetária, aplicar regras para números decimais e por aí vai.

Segue abaixo alguns operadores que podemos utilizar com o pipe:

- DatePipe: Formata uma data conforme a localização
- UpperCasePipe: Aplica caixa alta a um texto
- LowerCasePipe: Aplica caixa baixa a um texto
- CurrencyPipe: Transforma um número em um valor monetário string, conforme a localização
- DecimalPipe: Transforma um inteiro numa string com ponto flutuante, conforme a localização
- PercentPipe: Transforma um número em valor percentual, conforme a localização

### DatePipe

```html
<h3>Dates</h3>

<!--
  'M/d/yy, h:mm a',
  'MMM d, y, h:mm:ss a',
  'MMMM d, y, h:mm:ss a z',
  'EEEE, MMMM d, y, h:mm:ss a zzzz',
  'M/d/yy',
  'MMM d, y',
  'MMMM d, y',
  'EEEE, MMMM d, y',
  'h:mm a',
  'h:mm:ss a',
  'h:mm:ss a z',
  'h:mm:ss a zzzz'
 -->

<p>{{ date | date: 'M/d/yy, h:mm a' }}</p>
```

<a href="https://angular.io/api/common/DatePipe">Mais formatos...</a>

### CurrencyPipe

```html
<!--output 'US$ 1,90'-->
<p>A: {{1.90 | currency}}</p>

<!--output ' R$ 1,90'-->
<p>A: {{1.90 | currency:'BRL'}}</p>

<!--output ' BRL 1,90'-->
<p>A: {{1.90 | currency:'BRL':'code'}}</p>

<!--output 'R$ 0.002,19'-->
<p>B: {{2.19 | currency:'BRL':'symbol':'4.2-2'}}</p>

<!--output 'R$ 0.002,19'-->
<p>B: {{2.19 | currency:'BRL':'symbol-narrow':'4.2-2'}}</p>

<!--output 'R$ 0.001,35'-->
<p>B: {{1.3495 | currency:'BRL':'symbol':'4.2-2':'pt-BR'}}</p>
```
### DecimalPipe

O decimal pipe consegue transformar números inteiros em pontos flutuantes, ou apresentar
um flutuante de uma forma diferente:

```html
<h3>Decimal</h3>

<!--will output '4'-->
<p>{{3.6 | number: '1.0-0'}}</p>

<!--will output '-4'-->
<p>{{-3.6 | number:'1.0-0'}}</p>

<!-- will output 03,0 -->
<p>{{3 | number: '2.1-1'}}</p>

<!-- will output 3.46 -->
<p>{{3.4552322 | number: '1.1-2'}}</p>
```
- o primeiro número: refere-se a quantidade de números antes da virgula/ponto
- o segundo número: refere-se a quantidade mínima de números após a virgula/ponto
- o terceiro número: refere-se a quantidaed máxima de números após a virgula/ponto

_Uma observação importante: os números são arredondados de acordo com seu valor decimal_

## Uppercase 

```html
<h3>Uppercase</h3>

<p>{{ 'texto transformado em caixa alta' | uppercase }}</p>
```

## Lowercase

```html
<h3>Lowercase</h3>

<p>{{ 'TEXTO TRANSFORMADO EM CAIXA BAIXA' | lowercase }}</p>
```
## PercentPipe

```html
<h3>Percent</h3>

<!--output '80%'-->
<p>A: {{0.80 | percent}}</p>

<!--output '0,134.950%'-->
<p>B: {{1.3495 | percent:'4.3-5'}}</p>

<!--output '0 134,950 %'-->
<p>B: {{1.3495 | percent:'4.3-5':'pt'}}</p>
```

## 2. Localização (i18n)

Na maior parte das vezes, desejamos aplicar as regras de escrita local aos valores transformados
pelo operador pipe, como datas, valores decimais e monetários. Dessa forma realizamos uma
configuração no módulo onde o nosso componente se encontra para podermos utilizar a localização
desejada.

```typescript
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt); // alterar a localização de acordo com o país

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }, 
  ]
})
```
