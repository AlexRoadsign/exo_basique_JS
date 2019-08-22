const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  for(var i=0 ; i < books.length; i++){
    switch (books[i].rented){
      case 0:
        console.log("Non");
        break;
      default:
        console.log("Oui");
        break;
    }
  }

  let max_rented = books[0].rented
  let max_rented_title = books[0].title
  for (var i=1; i < books.length; i++)
    {
    if (books[i].rented > max_rented)
    {
        max_rented = books[i].rented;
        max_rented_title = books[i].title;
    }
    }
  console.log("Le livre le plus emprunté est " + max_rented_title)

  for (var i=1; i < books.length; i++)
    {
    if (books[i].rented < max_rented)
    {
        max_rented = books[i].rented;
        max_rented_title = books[i].title;
    }
    }
  console.log("Le livre le moins emprunté est " + max_rented_title)
  
  let book_id = []
  for (let i = 0; i < books.length; i++){
      if (books[i].id == 873495){
          book_id.push(books[i].title)
      }
  }
  console.log("Le livre avec la référence 873495 est " + book_id)

  console.log("On supprime de la liste le livre avec l'ID 133712 (cliquer sur la flèche grise)")
  function delete_line(){
    for(var i=0 ; i < books.length; i++){
     if(books[i].id == 133712) {delete books[i]}
    }
   console.log(books)
   }
   delete_line();
  
  
  console.log("Voici les livres triés par ordre alphabétique (cliquer sur la flèche grise).")
  books.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })
  console.log(books)
  

  
  
  