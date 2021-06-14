 const MovieData = [
    {
    
    image:"https://image.tmdb.org/t/p/w185/lETNNUshBgoeFbw91fzdulIernh.jpg",
    id: Math.random(),
    rating:"6.3",
    name: "Fast & Furious 9",
    date:"19-05-2021",
    description:"Action,Fantasme",
    trailer: (
        <iframe width="727"
         height="409"
          src="https://www.youtube.com/embed/_qyw6LC5pnE"
           title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
    ),
    },
    {
        
        image:"https://image.tmdb.org/t/p/w185/7d7JptYO7Mj8WH3NqClZdqXldop.jpg",
        id: Math.random(),
        rating:"6.5",
        name: "Le Dernier Voyage de Paul W.R",
        date:"2021",
        description:"Dans un futur proche, une mystérieuse lune rouge est exploitée à outrance pour son énergie. Alors qu’elle change brusquement de trajectoire et fonce droit sur la Terre, Paul W.R, le seul astronaute capable de la détruire",  
        trailer: (
            <iframe width="727"
             height="409" 
             src="https://www.youtube.com/embed/ciNSJfvp3QU"
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
               ),
    },
    {
        
        image:"https://image.tmdb.org/t/p/w185/5CVqHWO71hDFTaPFhlYG7lPyvrV.jpg",
        id: Math.random(),
        rating:"7",
        name: "Reste avec moi",
        date:"2020",
        description:"La vie de Steffi, 16 ans, est tout simplement parfaite : elle est jeune, elle vient d’obtenir son diplôme et s’apprête à partir en voyage scolaire avec son copain dans la ville de ses rêves",
        trailer:(
            <iframe width="727"
             height="409"
              src="https://www.youtube.com/embed/xJLqS21del0"
               title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

        ),
    },
    {
        
        image:"https://image.tmdb.org/t/p/w185/kztlf79KylNpQNmZRzyagz9tLno.jpg",
        id: Math.random(),
        rating:"8",
        name: "Army of the Dead",
        date:"2021",
        description:"Pendant une invasion de zombies à Las Vegas, un groupe de mercenaires décide de tenter le tout pour le tout et de pénétrer dans la zone de quarantaine, pour le plus grand braquage de leur vie.",
        trailer:(
            <iframe width="727"
             height="409"
              src="https://www.youtube.com/embed/tI1JGPhYBS8"
               title="YouTube video player"
                frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>

        )
    },
    ];
    export default MovieData ;