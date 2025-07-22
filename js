// script.js

// Exemplo: Mensagem de boas-vindas no 
console console . log ( 'Bem-vindo ao site Varcom!' );

// Exemplo: Adicionado o ano atual automaticamente no rodapé 
do documento . addEventListener ( 'DOMContentLoaded' , função () {
   const rodapé= documento . querySelector ( 'rodapé' );
   if (rodapé) {
     const ano = nova  data (). getAnoFull ();
     // Se já tiver um texto, só adicione o ano 
    if (!footer. innerHTML . include (year)) {
      rodapé. innerHTML += ` © ${year} ` ;
    }
  }
});
