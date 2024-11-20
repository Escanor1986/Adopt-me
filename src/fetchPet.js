// Fonction de récupération des données pour un animal spécifique
const fetchPet = async ({ queryKey }) => {
  // Récupère l'id de l'animal depuis la clé de requête
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // Lève une erreur si la réponse de l'API n'est pas OK
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // Retourne les données au format JSON
  return apiRes.json();
};

export default fetchPet;
