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

Edite o arquivo `src/app/services/portfolio-data.service.ts` para adicionar seus dados:

- **Informações pessoais**: nome, título, descrição
- **Habilidades**: adicione/remova tecnologias
- **Projetos**: adicione seus projetos com imagens e links
- **Redes sociais**: atualize seus links

### 2. Imagens

Coloque suas imagens na pasta `src/assets/images/`:
- `profile.jpg` - Foto de perfil
- `about.jpg` - Foto da seção sobre (opcional)
- `projects/` - Screenshots dos projetos

### 3. Cores e Tema

Modifique o arquivo `tailwind.config.js` para personalizar:
- Paleta de cores
- Fontes
- Espaçamentos customizados

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
│    │   │        └── hero.component.ts
│    │   │   ├── about/
│    │   │        └── about.component.ts
│    │   │   ├── skills/
│    │   │        └── skills.component.ts
│    │   │   ├── projects/
│    │   │        └── projects.component.ts
│    │   │   ├── contact/
│    │   │        └── contact.component.ts
│    │   │   └── footer/
│    │   │        └── footer.component.ts
│    │   └── app.routes.ts
│    ├── directives/
│    │   └── fade-in.directive.ts
│    ├── assets/
│    │   ├── icons/
│    │   └── images/
│    ├── models/
│    │   ├── project.model.ts
│    │   ├── skills.model.ts
│    │   └── social.model.ts
│    ├── services/
│    │   └── portfolio.service.ts
│    ├── app.component.ts
│    ├── app.config.server.ts
│    └── app.config.ts
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
- ✅ Menu mobile com hambúrguer
- ✅ Cards de projetos interativos
- ✅ Grid de habilidades
- ✅ Formulário de contato
- ✅ Links para redes sociais
- ✅ SEO otimizado

## 📝 Licença

MIT License - sinta-se livre para usar este template!

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ usando Angular + Tailwind CSS