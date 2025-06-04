Nota di Tiziano:

Ho riadattato la traccia per cercare di chiarire il più possibile i passaggi, evitando ambiguità. In ogni caso, se in dubbio, chiedete!

Ovviamente i nomi di pagine e componenti possono variare leggermente, l'importante è riconoscere correttamente il componente "pagina" e rispettare

la struttura fornita.

# Consegna

Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.

## Requisiti

Avere un componente PostsPage.jsx che contiene al suo interno un titolo e un componente PostsList.jsx.

Recuperare la lista dei post effettuando la chiamata API all’interno di PostsList.jsx, che dovrà mostrarli tutti.

- Milestone 1

Creiamo un file per definire il nostro PostsContext.jsx ed esportiamo le funzioni PostsProvider e usePosts

- Milestone 2

Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione

- Milestone 3

Spostiamo la chiamata API che recupera i posts in PostsContext.jsx

Facciamo in modo che il componente PostsList.jsx recuperi i post consumando il context

# Bonus

Crea una card per ogni post
