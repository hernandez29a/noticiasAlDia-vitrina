export function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return `HACE ${seconds} SEGUNDOS`;
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `HACE ${minutes} MINUTOS`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `HACE ${hours} HORAS`;
  
  return `HACE ${Math.floor(hours / 24)} DÍAS`;
}

// Data arrays for dynamic news generation
const subjects = ["Wall Street", "El BCE", "La Reserva Federal", "El sector tecnológico", "El mercado asiático", "El barril de Brent", "La inflación subyacente"];
const verbs = ["alcanza", "registra", "advierte sobre", "supera expectativas con", "mantiene cautela ante", "impulsa", "frena"];
const objects = ["nuevos máximos históricos", "una caída imprevista del 3%", "resultados récord este trimestre", "presiones inflacionistas persistentes", "el rally de las acciones de IA", "la volatilidad del mercado", "recortes de tipos inminentes"];
const sources = ["Bloomberg", "Reuters", "FT", "Economía Global", "EFE"];
const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCTOxj_oXCqk9ciMGn8k5SgvGGb1PAAhh9WlUe89N_2R_YTuqKugedOR4Ep98hw9TdFjIAegKHuqgoVY-70Q8bHPKubai0wVEk3uQeUD5Y9R8MJJKymjCOCryJb9KAnxHqBwfA1WRJAE3E6yF3FbSGrTtilyRPL7F8uUUcGVELNo04w9RMO5aKzjD1OAZujtJ4SwHNG_msZHgLKrqeyLVGGYNApGqAwUTFXJ2QHeB69mcqKR_NoRV7E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6osjx3dBUdkkK-FLHT9ln2GxNMjwn4cXpP5USfJXK5mi3gyHA8mQFVUFpYzVGnA49MCqx7NQCsZbhb4ZT4Y9L6PvGuD5e-gq2uwtTOPISU58yKV2wZzjVI0SrFobX4KEkjS4NSu9rPlGGgc2esYCEhp-iJVJoWX5p-tc73Qp9PQd4HcTJ5yp5dFxUzClmEjAebpUGKpFIy7m2NPf6Xo6LgELonYqIQA9f6IzN37oKtWuJEJ8dJsGj",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTHJHbvAENH0-NPSOjRPvgQsEygHrNgG0j_VA6q4NI-WrYJcG-4Y1Op9sd86SP-0hgpZ75inPFeZLAb43t2bxTQlaD3mCmvs0j1Yl9N7sntrGJwMTlDxlyX0_3x1XT5chJu316cveVH-H90FhP4m1swrqe3KKHG8ME4QNYRqpZ-xKDs1vqfky-ynueE0loi54dj8_wohdOHdPRzDqGGZjjEB1esrowDiGun8A3-I4k8a4SmA-dawf",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnp_LLt3YaS8RIg_pcu_bK02fKMZCz5kQN9ma7giLNStD6Vp8kph3qu-1R-TpZN0zMlMK4z59Rn-0bbLGntsLjHZfOG-e8OcdsGA1eGND1pu7SGnS79lLqK4qeImH6jSTY7GKsnMYMSprQ4LhKbVi3gOxquSZrJAvXJYEUq0eQ4EQiWH5uh6RsqodPeLyr0hs09kHTmANwMU4seb2TWQ0fgKniKC0L0Vq19zPiemYlaHhXojujY7ng"
];

export function generateRandomNews(id: string): import('./types').NewsItem {
  const title = `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${objects[Math.floor(Math.random() * objects.length)]}`;
  return {
    id,
    title,
    source: sources[Math.floor(Math.random() * sources.length)],
    timestamp: new Date(),
    image: images[Math.floor(Math.random() * images.length)],
    isAutomated: Math.random() > 0.3,
    status: 'pending'
  };
}
