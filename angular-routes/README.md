# Estrutura de rotas

## 1. Módulo de rotas

Uma aplicação angular pode começar com um módulo de rotas, é preferível que essa
opção seja selecionada ao criar a aplicação.

Outra questão importante é a criação de módulos que precisam de rotas, para tal podemos passar
a esses módulos a flag "--routing", definindo assim que o módulo de rotas será criado junto
aquele módulo.

`ng generate module <module-name> --routing`

O exemplo abaixo apresenta o módulo app que inicia a estrutura de rotas da aplicação,
a sua estrutura é relativamente simples, o **array** routes, é a estrutura que necessita ser
preenchida para podermos criar as nossas rotas, cada objeto dentro desse **array** é uma
rota e pode possuir varios atributos dependendo da necessidade da rota.

O objeto da rota pode conter:

- path: Caminho da rota
- pathMatch ('full' | 'prefix'): 
  O padrão full indica que a rota deve ser escrita exatamente como ela é para que seja carregada
  O padrão prefix, verifica o segmento de rota e identifica se o que foi digitado combina com o restante 
  da rota já carregado.
- redirectTo: Informa que a rota realiza o redirecionamento a outra rota
- component: Informa qual componente será carregado através da rota
- children: Estrutura de rotas filhas relacionadas a rota em questão
- loadChildren: Atributo que permite carregar um módulo e suas rotas
- outlet: nome passada a um element **<router-outlet></router-outlet>** para que o conteudo da 
rota seja carregado através dele

Há outros atributos que serão tratados em outro módulo.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentExampleComponent} from "./component-example/component-example.component";

const routes: Routes = [
  /**
   * rota que redireciona o usuário a primeira rota da aplicação, 
   * quando o mesmo acessar a rota principal
   * */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-page'
  }, 
  
  /**
   * Rota principal da aplicação, carrega um módulo que pode possuir
   * outro arquivo de rotas para seus próprios módulos e componentes.
   * */
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)
  },
  
  /**
   * Outra rota de exemplo, carrega um módulo que pode possuir outro 
   * módulo de rotas e seus respectivos componentes
   * */
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule)
  },
  
  /**
   * Estrutura que carrega apenas um módulo a ser exibido na rota em questão
   * */
  {
    path: 'component-example',
    pathMatch: 'full',
    component: ComponentExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## 2. RouterLink

O routerlink é uma diretiva que trabalha em conjunto com o sistema de rotas para enviar
o usuário de uma rota a outra, passando ou não **params** e **query params**.

```html
<button [routerLink]="['/first-page']">First</button>
```
### Params

```html
<button [routerLink]="['/component-example', 2]">Component-example</button>
```

### Query Params

```html
<button [routerLink]="['/second-page']" [queryParams]="{prop: 1}">Second</button>
```

## 3. Router

O router é um maneiro de trabalhar as rotas no arquivo ts do componente. 
Para utilizá-lo, precisamos injetar o serviço no nosso constructor.

`constructor(private router: Router) {}`

### navigate()

Permite ir de uma rota a outra, baseada no contexto do segmento da rota, podendo passar
parametros e query params, como segundo parametro da função, além de informar a qual
segmento de rota é relativa.

```typescript
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routes';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  /**
   * é possível caminhar entre rotas
   */
  goTo(): void {
    this.router.navigate(['/second-page'])
  }

  /**
   * é possível passar parametros
   */
  goToWithParam(): void {
    this.router.navigate(['/component-example', 2])
  }

  /**
   * é possível passar query params
   */
  goToWithQueryParam(): void {
    this.router.navigate(['/second-page'], {
      queryParams: {prop: 1}
    })
  }

  /**
   * relativeTo permite informar qual a rota atual para que o navigate possa checar 
   * se o segmento de rota passado combina
   */
  goToWithRelatedPath(): void {
    this.router.navigate(['./second-page'], {
      relativeTo: this.activatedRoute,
    })
  }
}

```

## 4. ActivatedRoute

O activated route tem o papel de designar qual a rota atual e a partir dela realizar uma porção
de ações, das quais as mais comuns são:

- capturar params
- capturar query params

_O exemplo abaixo contem algumas estruturas ainda não explicadas como o subscribe, o mesmo
será explicado no contexto dos services_

### pegar parametros

```typescript
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
    })
  }

}
```
### pegar query params

```typescript
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params)
    })
  }
}
```

## 5. NavigateByUrl

A função navigate by url, permite ir a outra rota, porém o caminho precisa estar completo,
ou seja, não é possível trabalhar com segmentos da rota como no navigate.

```typescript
 export class AppComponent {
  title = 'angular-routes';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  navigateByUrl(): void {
    this.router.navigateByUrl('/second-page')
  }
}
```

```html
<button (click)="navigateByUrl()">navegação via url</button>
```
