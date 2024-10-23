# Meu Portfólio em React

Este é um modelo projeto de portfólio pessoal desenvolvido em **React**, com rolagem suave e navegação dinâmica entre seções. O site é composto de várias seções, como "Início", "Sobre Mim", "Projetos", "Serviços" e "Habilidades", permitindo aos usuários acessar facilmente as diferentes partes da página.

## 📋 Funcionalidades

- **Menu de navegação** com links para rolar suavemente até diferentes seções da página.
- **Seções**:
  - **Início**: Apresentação inicial.
  - **Sobre Mim**: Informações pessoais e profissionais.
  - **Projetos**: Exibição de projetos realizados, com detalhes e links para os repositórios.
  - **Serviços**: Serviços oferecidos.
  - **Habilidades**: Habilidades técnicas em desenvolvimento.
- **Layout responsivo**: Compatível com diferentes tamanhos de tela.
- **Componentização** em React: Cada seção e o menu de navegação são componentes reutilizáveis.
  
## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **CSS**: Para estilização dos componentes.
- **JavaScript**: Para implementar funcionalidades como rolagem suave e navegação.
- **HTML**: Estruturação das páginas.

## 📦 Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:

   Navegue até o diretório do projeto e instale as dependências necessárias:

   ```bash
   cd seu-repositorio
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   Após a instalação das dependências, execute o seguinte comando para iniciar o servidor local:

   ```bash
   npm start
   ```

4. **Acesse o projeto no navegador**:

   O projeto estará disponível no endereço:

   ```
   http://localhost:3000
   ```

## 📂 Estrutura de Pastas

```bash
.
├── public
│   └── index.html         # Ponto de entrada do HTML
├── src
│   ├── components
│   │   ├── Header.js      # Componente do menu de navegação
│   │   ├── InitialSection.js  # Seção inicial
│   │   ├── AboutSection.js    # Seção "Sobre Mim"
│   │   ├── Projects.js    # Seção de projetos
│   │   ├── Services.js    # Seção de serviços
│   │   ├── Habilities.js  # Seção de habilidades
│   ├── App.js             # Componente principal
│   └── index.js           # Ponto de entrada do React
├── package.json           # Dependências do projeto
└── README.md              # Documentação do projeto
```

## ✨ Como Funciona a Navegação

No arquivo `Header.js`, há um menu de navegação que utiliza o método `querySelector` para identificar as seções correspondentes e aplicar a rolagem suave até elas:

```javascript
const handleNavigation = (e, sectionSelector) => {
  e.preventDefault(); // Previne o comportamento padrão do link
  
  const section = document.querySelector(sectionSelector);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
};
```

Cada seção no arquivo `App.js` possui um **ID** que permite a navegação adequada:

```javascript
<section id="inicio">
  <InitialSection />
</section>
```

## 🎨 Estilização

A estilização foi realizada com **CSS** puro para garantir simplicidade e flexibilidade. Cada componente tem seu próprio arquivo CSS, e classes foram utilizadas para estilizar as seções e o menu de navegação.

## 📄 Licença

---
