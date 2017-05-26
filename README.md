## Example Vue.js architecting app

> This project is a `initial commit` from the startup that I work


### Criar novo componente

Componente wrapper => colocar na pasta `src/components/pages/MvComponentName/MvComponentName.vue`
Componente genérico => colocar na pasta `src/components/shared-components/MvComponentName/MvComponentName.vue`

**Não colocar o style na tag style do componente, usar stylus com [divição de pastas](#Criar novo estilo) para componentes**

### Criar novo estilo

Estilo para componente wrapper => colocar na pasta `src/stylus/pages/component-name/_component-name.vue`
Estilo para componente genérico => colocar na pasta `src/stylus/components/component-name/_component-name.vue`

E fazer o import dele em `src/stylus/main.styl`

### Criar nova rota

Colocar na pasta `src/router/routes/RouteName.js`, com a seguinte sintaxe

```javascript
import MyBeatyComponent from '@/components/pages/MvMyBeatyComponent/MvMyBeatyComponent'

export default {
  path: '/path-to-your-content', // put in Portuguese
  name: 'RouteName',
  components: MyBeatyComponent
}
```

### Criar novo filtro

Colocar na pasta `src/filters/filter-name.js`, com a seguinte sintaxe

```javascript
export default {
  name: 'filter-name',
  handler: (value, arg1, arg2) => // your handler filter function
}
```

e importar e incluir no arquivo `src/filters/index.js`

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
