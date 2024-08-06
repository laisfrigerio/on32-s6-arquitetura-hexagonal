<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Banco de dados

Turma Online ON32 - Imersão JavaScript | Semana 6 | 2024 | Professora Lais Frigério

## Professora Lais

<h1>
  <img src="./assets/lais.png" alt="foto lais" width="200">
</h1>

Eu sou engenheira de software, professora de programação e compartilho conteúdo técnico em minhas redes sociais!

Fui aluna da segunda turma do curso Eudca{devas} em 2023!
Hoje trabalho como Engenheira de Software no Nubank.

- 💌 Email: laisfrigerio.dev@gmail.com
- 📸 Instagram: [@laisfrigerio](https://www.instagram.com/laisfrigerio/)
- 💼 LinkedIn: [in/laisfrigerio](https://www.linkedin.com/in/laisfrigerio/)
- 👩‍💻 Github:[/laisfrigerio](https://github.com/laisfrigerio)

## Arquitetura Hexagonal

> Projeto construído para exemplificar o uso da arquitetura Hexagonal com `NestJS`.

A **Arquitetura Hexagonal**, também conhecida como Arquitetura de Ports e Adapters, foi proposta por Alistair Cockburn em 2005. Essa arquitetura tem como objetivo criar um design de software que seja independente de frameworks, bibliotecas e tecnologias externas, facilitando a manutenção, evolução e testes do sistema.

A arquitetura hexagonal é compartilhada em 3 partes:

- Centro do Hexágono
- Lado esquerdo do hexágono
- Lado direito do hexágono

### O centro do Hexágono

É onde está localizado o domínio do seu negócio, as entidades e regras inerentes ao seu software. É um ambiente que deve ser totalmente isolado em termos de não ser afetado por ocorrências externas.

Esta camada, por exemplo, não tem conhecimento de como é feita a implementação de inserção e recuperação dos dados em um banco de dados, pois ela depende de uma abstração (interface).

### Lado esquerdo do Hexágono

É o lado do ator (usuário via interface, chamada de serviço) que conduz uma ação, pois este é o lado que realiza uma tarefa.

### Lado direito do Hexágono

É o lado secundário que é conduzido, seja para escrever dados, ler dados, modificar dados, e apagar dados.

Nesta camada, temos as classes concretas, como por exemplo, a camada de repository responsável por acessar o banco de dados para inserção e recuperação dos dados.

## Estruturação da arquitetura

A ideia principal desse modelo de arquitetura é separar o código em três partes:

1. **Domínio (Core)**: Contém a lógica de negócios pura e não depende de tecnologias externas - **`Centro do Hexágono`**.
2. **Portas (Ports)**: Interfaces que definem as entradas e saídas do sistema, conectando o domínio com o mundo externo - **`Lado esquerdo`**.
3. **Adaptadores (Adapters)**: Implementações concretas das portas, que permitem a interação do domínio com tecnologias externas (como bancos de dados, APIs, interfaces de usuário) - **`Lado direito`**.

Exemplo inicial de estruturação de pastas:

```lua
src/
├── domain/
│   ├── entities/
│   └── services/
├── ports/
│   ├── input/
│   └── output/
└── adapters/
    ├── input/
    └── output/
```

### Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- NestJs
- TypeScript

<p align="center">
Desenvolvido com :purple_heart: por laisfrigerio
</p>
