# Portfolio Profissional Angular

Portfolio pessoal moderno e responsivo construído com Angular 17+, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Angular 17+** - Framework principal
- **TypeScript** - Linguagem de programação
- **Tailwind CSS** - Framework de estilização
- **Angular Animations** - Animações suaves

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone 
cd portfolio-angular
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## 🎨 Personalização

### 1. Dados Pessoais

- **Informações pessoais**
- **Habilidades**
- **Projetos**
- **Redes sociais**

### 2. Imagens


### 3. Cores e Tema


## 🏃 Executar Localmente

```bash
ng serve
```

Acesse `http://localhost:4200`

## 🏗️ Build para Produção

```bash
ng build --configuration production
```

Os arquivos estarão em `dist/`

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
ng build --configuration production --base-href "/seu-repo/"
npx angular-cli-ghpages --dir=dist/portfolio-angular/browser
```

## 📁 Estrutura do Projeto

```
├── src/
│    ├── app/
│    │   ├── components/
│    │   │   ├── header/
│    │   │        ├── header.component.html
│    │   │        └── header.component.ts
│    │   │   ├── hero/
│    │   │        └── hero.component.html
│    │   │        └── hero.component.ts
│    │   │   ├── about/
│    │   │        └── about.component.html
│    │   │        └── about.component.ts
│    │   │   ├── skills/
│    │   │        └── skills.component.html
│    │   │        └── skills.component.ts
│    │   │   ├── projects/
│    │   │        └── projects.component.ts
│    │   │   ├── professions/
│    │   │        └── professions.component.html
│    │   │        └── professions.component.ts
│    │   │   ├── education/
│    │   │        └── education.component.html
│    │   │        └── education.component.ts
│    │   │   └── footer/
│    │   │        └── footer.component.html
│    │   │        └── footer.component.ts
│    │   └── app.routes.ts
│    ├── directives/
│    │   └── fade-in.directive.ts
│    ├── models/
│    │   ├── portfolio.model.ts
│    │   ├── project.model.ts
│    │   ├── skills.model.ts
│    │   └── social.model.ts
│    ├── services/
│    │   └── portfolio.service.ts
│    │   └── theme.service.ts
│    │   └── translation.service.ts
│    ├── app.component.html
│    ├── app.component.css
│    ├── app.component.ts
│    ├── app.config.server.ts
│    ├── app.routes.ts
│    └── app.config.ts
├── assets/
│  ├── icons/
│  ├── images/
├── 404.html
├── index.html
├── README.md
├── main.server.ts
├── main.ts
├── server.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── styles.css
```

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Animações ao scroll
- ✅ Menu mobile
- ✅ Cards de projetos interativos
- ✅ Grid de habilidades
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ SEO otimizado

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido usando Angular + Tailwind CSS
