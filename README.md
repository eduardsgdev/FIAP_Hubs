<div align="center">
  <h1 align="center">
    <br />
    <a href="#">
      <img src= "https://mqkjxvrsegwmaotlfkjl.supabase.co/storage/v1/object/public/images/handshubs.jpeg" alt="Handshub" style="width: 100%">
    </a>
  </h1>
</div>


## Introdução

Este projeto denominado "Hackathon" englobará os conhecimentos obtidos em todas as disciplinas do curso de Coding & Tech Journey From User to Creator da FIAP. A solução consiste em um sistema que conecta ONGs e Voluntários, com interface amigável. O administrador poderá cadastrar e gerenciar todas as ONGs, já o usuário poderá visualizar as ONGs cadastradas, se increver como voluntário e acessar suas incrições.

## [VÍDEO SOBRE AS FUNÇÕES SOLICITADAS NO TECH CHALLENGE](LINK)

## Como startar Localmente

Para rodar localmente o projeto, após clonar a branch.

1º - Acesse o terminal e use o comando npm install, esse comando fará instalar todos os pacotes acima. *º - O arquivo .env_example nos mostra um exemplo do que precisamos para que tudo funcione corretamente. As variáveis de ambiente precisam estar setadas, e obviamente precisa do banco de dados correlacional com a estrutura necessária. *º - Para inicializar localmente o frontend: npm start. *º - Para inicializar localmente o backend: npm run dev. (Verifique qual porta o backend esta rodando, por padrão via .env acessa a porta 3000, porém caso já esteja sendo usada acessa 3333. Observe o console qual porta, pois irá informar em qual porta está executando localmente, com essa informação renomeie a porta da variável 'api' dentro do arquivo 'apiAddress.js' na pasta 'util' no frontend.)

## Instalações

Os Npm necessarios para iniciar o projeto

```bash
npm install webpack 
```
```bash
npm install http-server
```
```bash
npm install @supabase/supabase-js
```
```bash
npm install dotenv
```
```bash
npm install axios
```
```bash
npm install express
```
```bash
npm install require
```
```bash
npm install nodemon
```
```bash
npm install cors
```
```bash
npm install jsonwebtoken
```
```bash
npm install bcryptjs
```
```bash
npm install uuid
```
```bash
npm install csv-writer
```
```bash
npm install moment
```

## **Tecnologias e Ferramentas**

**Frontend**
</br></br>
**CSS** - Cascading Style Sheets, a linguagem essencial para dar estilo e vida às páginas da web, oferece controle preciso sobre o layout e elementos visuais, garantindo uma experiência consistente e atrativa para os usuários.
</br></br>
**HTML** - HyperText Markup Language, estrutura o conteúdo das páginas online, fornecendo a base para a apresentação de textos, imagens e outros elementos de forma organizada e acessível.
</br></br>
**JS** - Javascript, a linguagem dinâmica, dá vida às páginas web com interatividade e funcionalidades avançadas, desde animações simples até aplicativos complexos.
</br></br>
**Bootstrap** - Popular framework de front-end, oferece componentes prontos e uma grade responsiva, agilizando o desenvolvimento de interfaces web modernas e adaptáveis
</br></br>
**Figma** - A ferramenta de design colaborativo, simplifica o processo de criação de interfaces com sua interface intuitiva e recursos poderosos, facilitando a colaboração e o compartilhamento de designs. Para consultar o figma do projeto: <a href="https://www.figma.com/design/vLSjH82SITUZrs12HEmXeb/Figma-basics?node-id=1132-1102&t=yMFLWECmyJMbboT4-0">Clique aqui</a>
</br></br>

**Backend**
</br></br>
**NodeJs** - Ambiente de execução, viabiliza o desenvolvimento de aplicações escaláveis e eficientes no servidor, unificando o desenvolvimento web com seu ecossistema de pacotes amplo e dinâmico.
</br></br>
**Supbase** - Plataforma de banco de dados open-source, utilizado para criar aplicativos escaláveis e seguros, com APIs simples e integração perfeita com ferramentas populares de desenvolvimento. Com base em postgres.
</br></br>

## **Desafios e Soluções**

**1º Challenge CORS** - Fazer com que o frontend pudesse realizar um request para o backend na mesma máquina. Nós tinhamos um problema de CORS(Cross-Origin Resource Sharing), e que apesar de usar o everything(*) nos metodos e na origem, não conseguiamos concluir as requisições.</br>
Solução: Com bastante pesquisa incluímos as outras configurações no app do método de sucesso e headers.
</br></br>

**2º Challenge MVC** - Foi definir e manter o padrão de desenvolvimento do projeto como todo de inicio, ao fim.</br>
Solução: Autoavaliação e CodeReview durante todo o desenvolvimento do projeto.
</br></br>

**3º Challenge Schedule** - A lógica de atribuir e comparar datas, garatindo que não ocorresse a sobreposição de voluntariados, entre outros detalhes adicionais.</br>
Solução: Para atender todos os requisitos, utilizamos além do timestamp, uma lib adicional (moment).
</br></br>

**4º Challenge Pagination** - Elaborar uma lógica para calcular a paginação utilizando apenas o Javascript.</br>
Solução: Dividimos o array nas proporções desejadas, pois desejavamos evitar novos requests na API, poupando processamento no Banco de Dados.
</br></br>

## **Motivação**

O projeto teve início como um "Hackathon", uma iniciativa destinada a explorar as tecnologias propostas pela pós-graduação FIAP, visando aprofundar nosso entendimento dos temas abordados em sala de aula e impulsionar nossa aprendizagem prática através de um objetivo pré-estabelecido. No entanto, acreditamos que o grupo foi além, entregando uma solução que possui aplicabilidade no mercado de trabalho.

### [Code of Conduct](https://code.fb.com/codeofconduct)

## **Membros Grupo Q - FIAP**

Gabriel Ramos
</br>
Eduardo Souza
</br>
Mateus Mororó
</br>
Alana Vitória
</br>
Bruno Laerte
</br>

## **Contatos**

Formas de entrar em contato

- [Discord](https://discord.gg/Grupo Q -FIAP):
  - `#Geral` Onde compartilhamos.


## **Agradecimentos**

Gostariamos de agradeçer a todos os professores e coordenadores da instituição de ensino FIAP, por nos impulsonar e prover as ferramentas para nosso desenvolvimento profissional
