# Comunicação entre componentes

Transmitir dados entre componentes:
- @Input
- @Output

## 1. Enviar dados do componente pai ao filho 

### @Input

Através do decorator @Input, um componente pode informar que ele recebe um dado de um determinado
tipo através de uma propriedade HTML.

No exemplo abaixo, temos a variável de classe do componente userName de tipo **string**, a tipagem
nesse caso é fundamental, ou seja, dependendo do que o programador esteja a construir sempre use 
uma tipagem coerente, por exemplo: Poderiamos tanto passar apenas um campo string quanto um objeto
do tipo usuário com vários campos dentro de uma model.

```typescript
export class MainComponent implements OnInit {

  @Input() userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
```

Na utilização do componente acima numa página HTML de outro componente, podemos atribuir valor
ao atributo criado da seguinte forma:

```html
<!-- Utilizando o componente Main dentro do componente App -->
<app-main userName="José"></app-main>
```
_Para receber valores que não são strings devemos utilizar a sintaxe com colchetes []:_

```typescript
export class MainComponent implements OnInit {

  @Input() userName: string = "";
  
  @Input() married: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
```
```html
<!-- Utilizando o componente Main dentro do componente App -->
<app-main userName="José" [married]="true"></app-main>
```

## 2. Enviar dados do componente filho ao componente pai

### @Output

Em muitas situações precisamos enviar dados do componente filho de volta para o pai, para isso,
precisamos aprender a criar **eventos customizados**, um evento é toda a interação que pode ou não
ser disparada através do usuário, e tem por consequência realizar uma ação, por exemplo:
Chamar uma função que realizar alguma espécie tratativo no código.

Exemplo de evento disparado por um usuário:

```html
<!-- Exemplo de evento disparado pelo usuário -->

<h3>Exemplo de evento disparado por um usuário (click):</h3>
<button (click)="count = count + 1">Contar</button>
<p>Contador: {{count}}</p>
```
Porém, podemos criar um evento customizado que pode ser disparado na ocasião que desejarmos, inclusive
ser acionado por outro evento:

```html
<!-- Enviar informação do componente main ao componente pai app @Output -->

<h3>Enviar dados ao componente pai @Output: </h3>
<p>
  O nome do usuário é: {{userName}}
</p>
<p>Casado: {{married}}</p>
<button (click)="sendData()">Enviar</button>
```

```typescript
export class MainComponent implements OnInit {

  // evento isMarriedEvent é um evento customizado do componente main
  @Output() isMarriedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() userName: string = "";

  @Input() married: boolean = false;

  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // evento emitido através do click do usuário
  sendData(): void {
    this.isMarriedEvent.emit(this.married)
  }
}
```
Recebendo o retorno do evento que foi disparado no componente pai:

- Utilizamos o mesmo evento criado com o decorator @Output
- O valor da resposta do evento pode ser capturado através da variável especial $event
- O valor nesse exemplo foi passado como parametro para uma função

```html
<!-- Enviando dados ao componente filho @Input -->

<!-- Evento customizado sendo utilizado no template html do componente pai -->
<app-main (isMarriedEvent)="responseOfDataFromChild($event)" userName="José" [married]="true">
</app-main>

```

```typescript
export class AppComponent {
  title = 'components-comunication';

  responseOfDataFromChild(data: boolean): void {
    console.log(data)
  }
}
```



