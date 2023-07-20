// Régler l'application de reset et du style body à l'ensemble des pages !!!

import PropTypes from "prop-types";
// import AccommodationDatabase from "../data/accommodationsDatabase.json";
// import Accommodations from "../data/accommodationsDatabase.json";

function Accommodation() {
    return (
      <div className="App">Logement</div>
    )
};

// Sécurisation des props et valeurs par défaut
// Choix de PropTypes vs TypeScript (voir les commentaires en bas de page)
Accommodation.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
      }).isRequired,
  rating: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

Accommodation.defaultProps = {
  id: "non disponible",
  title: "non disponible",
  cover: "non disponible",
  pictures: ["images non disponibles"],
  description: "non disponible",
  host: {
        name: "non disponible",
        picture: "image non disponible"
      },
  rating: "0",
  location: "non disponible",
  equipments: ["description des équipements non disponible"],
  tags: ["non disponible"]
}
// Importer des images par défaut pour cover, pictures et host{picture}
// Créer une condition pour invalider une fiche logement avec des informations critiques absentes (id, host{name}, location)

export default Accommodation;

// Choix de PropTypes vs TypeScript
// PropTypes :  runtime type-checking (pendant que l'application tourne dans le navigateur) ;
//              affichage d'erreurs dans la console ;
//              peu de collaborateurs ;
//              taille modeste du projet ;
//              facilité d'implémentation et d'utilisation.

// TypeScript : vérification au moment de la compilation ;
//              erreurs attrapées pendant le build, avant le deploy ;
//              projet avec de nombreux collaborateurs ;
//              fort typage ;
//              installation et configuration plus complexes.