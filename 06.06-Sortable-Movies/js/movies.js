const movies = [ 

  { name: "2001: A Space Odyssey", year: 1968, mins: 149, genres: ["Sci-Fi" , "Adventure"], 
    director: "Stanley Kubrick", oscars: {won: 1, nominated: 4}, "rotton tomatoes": 92, },

  { name: "Ali", year: 2001, mins: 157, genre: ["Biography", "Drams", "Sport"],
  director: "Michael Man", oscars: {won: 0, nominated: 2}, "rotton tomatoes": 68, },

  { name: "Apocalypse Now", year: 1979, mins: 153, genres: ["Drama", "War"], 
  director: "Francis Ford Coppola", oscars: {won: 2, nominated: 8}, "rotton tomatoes": 88 },

  { name: "Avengers: Endgame", year: 2019, mins: 181, genres: ["Action", "Adventure", "Sci-Fi"], 
  director: "Anthony Russo, Joe Russo", oscars: {won: 1, nominated: 1}, "rotton tomatoes": 94 },

  { name: "The Ballad of Buster Scruggs", year: 2018, mins: 132, genres: ["Comedy", "Drama", "Musical"], 
  director: "Joel Coen, Ethan Coen", oscars: {won: 0, nominated: 3}, "rotton tomatoes": 91 },

  { name: "A Beautiful Mind", year: 2001, mins: 135, genres: ["Biography", "Drama"], 
  director: "Ron Howard", oscars: {won: 4, nominated: 8}, "rotton tomatoes": 75 },

  { name: "Beverly Hills Cop", year: 1984, mins: 105, genres: ["Action", "Comedy", "Crime"], 
  director: "Martin Brest", oscars: {won: 0, nominated: 1}, "rotton tomatoes": 83 },

  { name: "Black Panther", year: 2018, mins: 134, genres: ["Action", "Adventure", "Sci-Fi"], 
  director: "Ryan Coogler", oscars: {won: 3, nominated: 7}, "rotton tomatoes": 96 },

  { name: "Casablanca", year: 1942, mins: 102, genres: ["Drama", "Romance", "War"], 
  director: "Michael Curtiz", oscars: {won: 3, nominated: 8}, "rotton tomatoes": 99 },

  { name: "City Lights", year: 1931, mins: 87, genres: ["Comedy", "Drama", "Romance"], 
  director: "Charlie Chaplin", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 98 },

  { name: "A Clockwork Orange", year: 1971, mins: 136, genres: ["Crime", "Drama", "Sci-Fi"], 
  director: "Stanley Kubrick", oscars: {won: 0, nominated: 4}, "rotton tomatoes": 87 },

 { name: "The Count of Monte Cristo", year: 2002, mins: 131, genres: ["Action", "Adventure", "Drama"], 
 director: "Kevin Reynolds", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 86 },

  { name: "The Deer Hunter", year: 1978, mins: 183, genres: ["Drama", "War"], 
  director: "Michael Cimino", oscars: {won: 5, nominated: 9}, "rotton tomatoes": 94 },

  { name: "Due Date", year: 2010, mins: 95, genres: ["Comedy", "Drama"], 
  director: "Todd Phillips", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 40 },

  { name: "E.T. the Extra-Terrestrial", year: 1982, mins: 115, genres: ["Family", "Sci-Fi"], 
  director: "Steven Spielberg", oscars: {won: 4, nominated: 9}, "rotton tomatoes": 98 },

  { name: "Fight Club", year: 1999, mins: 139, genres: ["Drama"], 
  director: "David Fincher", oscars: {won: 0, nominated: 1}, "rotton tomatoes": 79 },

  { name: "Forrest Gump", year: 1994, mins: 142, genres: ["Drama", "Romance"], 
  director: "Robert Zemeckis", oscars: {won: 6, nominated: 13}, "rotton tomatoes": 72 },

  { name: "Ghost", year: 1990, mins: 127, genres: ["Drama", "Fantasy", "Romance"], 
  director: "Jerry Zucker", oscars: {won: 2, nominated: 5}, "rotton tomatoes": 74 },

  { name: "Gladiator", year: 2000, mins: 155, genres: ["Action", "Adventure", "Drama"], 
  director: "Ridley Scott", oscars: {won: 5, nominated: 12}, "rotton tomatoes": 77 },

  { name: "The Godfather", year: 1972, mins: 175, genres: ["Crime", "Drama"], 
  director: "Francis Ford Coppola", oscars: {won: 3, nominated: 11}, "rotton tomatoes": 92 },

  { name: "The Godfather, Part II", year: 1974, mins: 202, genres: ["Crime", "Drama"], 
  director: "Francis Ford Coppola", oscars: {won: 6, nominated: 11}, "rotton tomatoes": 97 },

  { name: "Goodfellas", year: 1990, mins: 145, genres: ["Biography", "Crime", "Drama"], 
  director: "Martin Scorsese", oscars: {won: 1, nominated: 6}, "rotton tomatoes": 96 },

  { name: "The Grapes of Wrath", year: 1940, mins: 129, genres: ["Drama"], 
  director: "John Ford", oscars: {won: 2, nominated: 7}, "rotton tomatoes": 100 },

  { name: "It's a Wonderful Life", year: 1946, mins: 130, genres: ["Drama", "Family", "Fantasy"], 
  director: "Frank Capra", oscars: {won: 0, nominated: 5}, "rotton tomatoes": 94 },

  { name: "Lawrence of Arabia", year: 1962, mins: 227, genres: ["Adventure", "Biography", "Drama"], 
  director: "David Lean", oscars: {won: 7, nominated: 10}, "rotton tomatoes": 97 },

  { name: "A League of Their Own", year: 1992, mins: 128, genres: ["Comedy", "Drama", "Sport"], 
  director: "Penny Marshall", oscars: {won: 0, nominated: 2}, "rotton tomatoes": 78 },

  { name: "Lillies of the Field", year: 1963, mins: 94, genres: ["Drama"], 
  director: "Ralph Nelson", oscars: {won: 1, nominated: 5}, "rotton tomatoes": 86 },

  { name: "Look Who's Talking", year: 1993, mins: 93, genres: ["Comedy", "Romance"], 
  director: "Amy Heckerling", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 57 },

  { name: "A Place in the Sun", year: 1951, mins: 122, genres: ["Drama", "Film-Noir", "Romance"], 
  director: "George Stevens", oscars: {won: 6, nominated: 9}, "rotton tomatoes": 95 },

  { name: "Rock of Ages", year: 2012, mins: 136, genres: ["Comedy", "Drama", "Musical"], 
  director: "Adam Shankman", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 41 },

  { name: "Roman Holiday", year: 1953, mins: 118, genres: ["Comedy", "Drama", "Romance"], 
  director: "William Wyler", oscars: {won: 3, nominated: 10}, "rotton tomatoes": 98 },

  { name: "The Shining", year: 1980, mins: 144, genres: ["Drama", "Horror"], 
  director: "Stanley Kubrick", oscars: {won: 0, nominated: 2}, "rotton tomatoes": 84 },

  { name: "Singin' in the Rain", year: 1952, mins: 103, genres: ["Comedy", "Musical", "Romance"], 
  director: "Stanley Donen, Gene Kelly", oscars: {won: 0, nominated: 2}, "rotton tomatoes": 94 },

  { name: "The Warriors", year: 1979, mins: 90, genres: ["Action", "Crime", "Thriller"], 
  director: "Walter Hill", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 89 },

  { name: "Wedding Crashers", year: 2005, mins: 119, genres: ["Comedy", "Romance"], 
  director: "David Dobkin", oscars: {won: 0, nominated: 0}, "rotton tomatoes": 75 },

  { name: "The Wizard of Oz", year: 1939, mins: 101, genres: ["Adventure", "Family", "Fantasy"], 
  director: "Victor Fleming", oscars: {won: 2, nominated: 6}, "rotton tomatoes": 98 },

  { name: "Terminator 2: Judgment Day", year: 1991, mins: 137, genres: ["Action", "Sci-Fi"], 
  director: "James Cameron", oscars: {won: 4, nominated: 6}, "rotton tomatoes": 94 },

  { name: "The Wolf of Wall Street", year: 2013, mins: 180, genres: ["Biography", "Comedy", "Crime"], 
  director: "Martin Scorsese", oscars: {won: 0, nominated: 5}, "rotton tomatoes": 78 },

  { name: "The Usual Suspects", year: 1995, mins: 106, genres: ["Crime", "Drama", "Mystery"], 
  director: "Bryan Singer", oscars: {won: 2, nominated: 2}, "rotton tomatoes": 89 },

  { name: "The Silence of the Lambs", year: 1991, mins: 118, genres: ["Crime", "Drama", "Thriller"], 
  director: "Jonathan Demme", oscars: {won: 5, nominated: 7}, "rotton tomatoes": 96 },

  { name: "The Matrix", year: 1999, mins: 136, genres: ["Action", "Sci-Fi"], 
  director: "Lana Wachowski, Lilly Wachowski", oscars: {won: 4, nominated: 4}, "rotton tomatoes": 88 },

  { name: "The Grapes of Wrath", year: 1940, mins: 129, genres: ["Drama", "History"], 
  director: "John Ford", oscars: {won: 2, nominated: 7}, "rotton tomatoes": 100 },

  { name: "Sunset Boulevard", year: 1950, mins: 110, genres: ["Drama", "Film-Noir"], 
  director: "Billy Wilder", oscars: {won: 3, nominated: 11}, "rotton tomatoes": 98 },

  { name: "Star Wars", year: 1977, mins: 121, genres: ["Action", "Adventure", "Fantasy"], 
  director: "George Lucas", oscars: {won: 6, nominated: 10}, "rotton tomatoes": 92 },

  { name: "Modern Times", year: 1936, mins: 87, genres: ["Comedy", "Drama", "Family"], 
  director: "Charlie Chaplin", oscars: {won: 0, nominated: 3}, "rotton tomatoes": 95 },

  { name: "Mr. Smith Goes to Washington", year: 1939, mins: 129, genres: ["Drama"], 
  director: "Frank Capra", oscars: {won: 1, nominated: 11}, "rotton tomatoes": 91 },

  { name: "Raiders of the Lost Ark", year: 1981, mins: 115, genres: ["Action", "Adventure"], 
  director: "Steven Spielberg", oscars: {won: 5, nominated: 9}, "rotton tomatoes": 95 }
];