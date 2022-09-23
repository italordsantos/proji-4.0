---
sidebar_position: 1
description: a.
slug: /
---

# Introdução

⚡️ O arduíno é uma placa de prototipagem para você montar e testar projetos eletrônicos

Fazendo uma analogia, é possível dizer que o arduíno funciona semelhante a um lego, onde você vai encaixando peças e assim constrói algo incrível!

### Para acendermos um LED

Num primeiro momento, não é difícil para iniciarmos, veja como é fácil:

Primeiramente, diga para o arduíno em qual pino você conectou o LED

```javascript
int LED = 9;
pinmode(LED, OUTPUT);
```

Agora, para acendê-lo, basta que a placa ligue aquele pino
```javascript
digital.write(LED, HIGHT);
```


### A complexidade varia com o projeto

Apesar de parecer simples acender um LED, quanto mais ousados forem os projetos, a dificuldade também aumenta, mas não se preocupe: existe **MUITO** material na internet para te auxiliar ;)