import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

// Composant affichant les détails d'un animal
const Details = () => {
  // Récupère l'id de l'animal depuis l'URL grâce à useParams()
  const { id } = useParams();

  // Utilise react-query pour gérer la récupération des données
  // "details" + id = clé unique pour cette requête
  // fetchPet est la fonction de récupération des données
  
  //! En interne, react-query fait quelque chose comme ceci: 
  //! fetchPet({ queryKey: ["details", id] });

  const results = useQuery(["details", id], fetchPet);

  // Affiche un loader pendant que les données sont en cours de récupération
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  // Récupère le premier animal depuis les résultats de la requête
  const pet = results.data.pets[0];

  // Retourne l'affichage détaillé de l'animal
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
