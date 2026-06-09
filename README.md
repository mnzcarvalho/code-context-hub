# Contexto de projeto para IA

https://ia-project-context.lovable.app

<img width="1600" height="900" alt="ccia" src="https://github.com/user-attachments/assets/eeb062ec-8b8f-4469-9f75-e55043e8bbf3" />


# Project Context

> Generate structured project context for AI-assisted development.

Project Context é uma ferramenta que gera artefatos de contexto a partir de projetos de software, permitindo que IAs compreendam a estrutura e a organização do código de forma mais eficiente.

---

## ✨ Funcionalidades

- Geração automática da árvore do projeto (`tree.txt`)
- Execução local utilizando Bun
- Interface web para configuração e execução
- Criação automática da pasta `.code-context`
- Exclusão de diretórios desnecessários durante a análise
  - `node_modules`
  - `.git`
  - `.tanstack`
  - `.lovable`
  - `dist`
  - `build`

---

## 🚀 Como usar

### Instalar dependências

```bash
bun install
```

### Executar a aplicação

```bash
bun dev
```

A aplicação estará disponível em:

```txt
http://localhost:8080
```

---

## 📂 Gerar a árvore do projeto

1. Abra a aplicação no navegador.
2. Acesse a aba **Configuração**.
3. Informe o caminho da pasta do projeto.
4. Clique em **Salvar Configurações / Executar Script**.

---

## 📄 Saída gerada

Após a execução será criada a pasta:

```txt
<projeto>
└── .code-context
    └── tree.txt
```

### Exemplo

```txt
meu-projeto
├── src
│   ├── components
│   └── pages
├── package.json
└── README.md
```

---

## 🎯 Objetivo

Fornecer para modelos de IA uma representação compacta e organizada da estrutura de um projeto, reduzindo a necessidade de leitura manual de diretórios e melhorando a compreensão do contexto do código.

---

## 🗺️ Roadmap

### Atual

- [x] Geração de `tree.txt`
- [x] Interface para execução local
- [x] Exportação para `.code-context`

### Próximos passos

[ ] comming soon xD 

---

## 🛠️ Stack

- Bun
- React
- TanStack Start
- TypeScript
- Tailwind CSS

---

## 📜 Licença

Este projeto está em desenvolvimento e ainda não possui uma licença definida.