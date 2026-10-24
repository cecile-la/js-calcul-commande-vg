// Vérifier que le fichier est bien relié à la page
console.log("script.js chargé");

// Jeu de test du menu : valeurs inventées, prix en euros
const prixPourPersonnesMinimum = 120;
const nombrePersonnesMinimum = 6;
const regimeMenu = "classique";
console.log("Le prix du menu (minimum de personnes imposé) est : " + prixPourPersonnesMinimum + " euros, le nombre de personnes minimum pour commander ce menu est : " + nombrePersonnesMinimum + ", le régime du menu est : " + regimeMenu + ".");

// Régime du menu
switch (regimeMenu) {
    case "classique":
        console.log("Menu classique : viande ou poisson.");
        break;
    case "vegan":
        console.log("Menu vegan : sans aucun produit d’origine animale.");
        break;
    case "vegetarien":
        console.log("Menu végétarien : sans viande ni poisson.");
        break;
    default:
        console.log("Régime inconnu : " + regimeMenu + ". Valeurs attendues : classique, vegetarien, vegan.");
}

// Jeu de test de la commande : valeurs inventées, distance mesurée en km
const nombrePersonnesCommandees = 11;
const distancePourLivraison = 12;
const livraisonABordeaux = false;
console.log("Le nombre de personnes commandées pour ce menu est : " + nombrePersonnesCommandees + ", la distance de livraison est : " + distancePourLivraison + " km, la livraison est-elle à Bordeaux : " + livraisonABordeaux + ".");

// Règles imposées par l'énoncé "Vite & Gourmand", prix en euros, taux en fraction
const FRAIS_LIVRAISON_FORFAITAIRES = 5;
const PRIX_PAR_KM_HORS_BORDEAUX = 0.59;
const TAUX_REMISE = 0.10;
const PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE = 5;

// Fonctions de calcul
// À améliorer : ces fonctions utilisent prixParPersonne et nombrePersonnesMinimum, données du menu déclarées hors des fonctions (dépendances cachées) ; à passer en paramètres plus tard
function calculerPrixAvantRemise(nombrePersonnes) {
    const prixAvantRemise = prixParPersonne * nombrePersonnes;
    return prixAvantRemise;
}

// Rappel : TAUX_REMISE est une fraction (x % = x / 100) : il se multiplie directement, sans diviser par 100
// Lecture : montant de la remise = prix de la commande avant remise × taux de remise
function calculerMontantRemise(prixAvantRemise, nombrePersonnes) {
    if (nombrePersonnes >= (nombrePersonnesMinimum + PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE)) {
        const montantRemise = prixAvantRemise * TAUX_REMISE;
        return montantRemise;
    }
    return 0;
}

// Lecture : à Bordeaux = forfait ; Hors Bordeaux =  forfait + prix par km x distance ;
function calculerFraisLivraison(aBordeaux, distance) {
    if (aBordeaux) {
        return FRAIS_LIVRAISON_FORFAITAIRES;
    }
    return FRAIS_LIVRAISON_FORFAITAIRES + PRIX_PAR_KM_HORS_BORDEAUX * distance;
}

// Résumé de la commande, ou message si elle est impossible
function construireResumeCommande(nombrePersonnes, aBordeaux, distance) {
    if (nombrePersonnes < nombrePersonnesMinimum) {
        // sortie anticipée : commande impossible
        return "Commande impossible : " + nombrePersonnes + " personnes, le minimum de ce menu est de " + nombrePersonnesMinimum + " personnes.";
    }
    const prixAvantRemise = calculerPrixAvantRemise(nombrePersonnes);
    const montantRemise = calculerMontantRemise(prixAvantRemise, nombrePersonnes);
    const fraisLivraison = calculerFraisLivraison(aBordeaux, distance);
    const prixTotal = prixAvantRemise - montantRemise + fraisLivraison;
    return "Commande de " + nombrePersonnes + " personnes : " + prixAvantRemise.toFixed(2) + " euros avant remise, " + montantRemise.toFixed(2) + " euros de remise, " + fraisLivraison.toFixed(2) + " euros de livraison, total " + prixTotal.toFixed(2) + " euros.";
}

// Calculs de la commande
// Règle de l'énoncé : commande impossible sous le nombre minimum de personnes du menu
const commandePossible = nombrePersonnesCommandees >= nombrePersonnesMinimum;
console.log("Est-ce que la commande est possible ? " + commandePossible);

const prixParPersonne = prixPourPersonnesMinimum / nombrePersonnesMinimum;
console.log("Le prix par personne est : " + prixParPersonne + " euros.");

const prixCommandeAvantRemise = calculerPrixAvantRemise(nombrePersonnesCommandees);
console.log("Le prix de la commande avant remise est : " + prixCommandeAvantRemise + " euros.");

// Règle de l'énoncé : remise si la commande compte au moins N personnes de plus que le minimum du menu
// Lecture : nombre commandé >= (minimum du menu + écart requis)
const remiseApplicable = nombrePersonnesCommandees >= (nombrePersonnesMinimum + PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE);
console.log("La remise est applicable : " + remiseApplicable);

const montantRemise = calculerMontantRemise(prixCommandeAvantRemise, nombrePersonnesCommandees);
console.log("Le montant de la remise est : " + montantRemise + " euros.");

const prixCommandeApresRemise = prixCommandeAvantRemise - montantRemise;
console.log("Le prix de la commande après remise est : " + prixCommandeApresRemise + " euros.");

const fraisLivraisonCommande = calculerFraisLivraison(livraisonABordeaux, distancePourLivraison);
console.log("Les frais de livraison sont : " + fraisLivraisonCommande + " euros.");

// Lecture : total = prix après remise + frais de livraison
const prixCommandeTotalAvecLivraison = prixCommandeApresRemise + fraisLivraisonCommande;
console.log("Le prix final à payer, livraison incluse, est : " + prixCommandeTotalAvecLivraison + " euros.");

// Résumé de la commande
console.log(construireResumeCommande(nombrePersonnesCommandees, livraisonABordeaux, distancePourLivraison));

// Grille de prix selon le nombre de personnes
const nombrePersonnesMaxGrille = 15;
for (let nombrePersonnes = nombrePersonnesMinimum; nombrePersonnes <= nombrePersonnesMaxGrille; nombrePersonnes++) {
    const prixGrille = prixParPersonne * nombrePersonnes;
    console.log(`${nombrePersonnes} personnes : ${prixGrille.toFixed(2)} euros.`);
}

// Frais de livraison hors Bordeaux selon la distance
// Jeu de test : distances inventées, en km
const distancesVillesHorsBordeaux = [5, 12, 20, 30];
for (const distanceVilleHorsBordeaux of distancesVillesHorsBordeaux) {
    const fraisLivraisonVille = FRAIS_LIVRAISON_FORFAITAIRES + PRIX_PAR_KM_HORS_BORDEAUX * distanceVilleHorsBordeaux;
    console.log(`${distanceVilleHorsBordeaux} km : ${fraisLivraisonVille.toFixed(2)} euros.`);
}

// Test : une saisie de formulaire est une chaîne, même si elle contient un nombre
const nombrePersonnesSaisie = "11";
console.log("Saisie : " + nombrePersonnesSaisie);
console.log("Saisie + 1 : " + (nombrePersonnesSaisie + 1));
console.log("Saisie * 2 : " + (nombrePersonnesSaisie * 2));
console.log("typeof saisie : " + typeof nombrePersonnesSaisie);

// Conversion de la saisie en nombre, avant de calculer
const nombrePersonnesSaisieConvertie = Number(nombrePersonnesSaisie);
console.log("Saisie convertie + 1 : " + (nombrePersonnesSaisieConvertie + 1));
console.log("typeof saisie convertie : " + typeof nombrePersonnesSaisieConvertie);

if (Number.isNaN(nombrePersonnesSaisieConvertie)) {
    console.log(`Saisie invalide : ${nombrePersonnesSaisie}. Entrez un nombre de personnes en chiffres.`);
} else {
    console.log(`Saisie valide : ${nombrePersonnesSaisieConvertie} personnes.`);
}
