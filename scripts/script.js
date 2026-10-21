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

// Calculs de la commande
// Règle de l'énoncé : commande impossible sous le nombre minimum de personnes du menu
const commandePossible = nombrePersonnesCommandees >= nombrePersonnesMinimum;
console.log("Est-ce que la commande est possible ? " + commandePossible);

const prixParPersonne = prixPourPersonnesMinimum / nombrePersonnesMinimum;
console.log("Le prix par personne est : " + prixParPersonne + " euros.");

const prixCommandeAvantRemise = prixParPersonne * nombrePersonnesCommandees;
console.log("Le prix de la commande avant remise est : " + prixCommandeAvantRemise + " euros.");

// Règle de l'énoncé : remise si la commande compte au moins N personnes de plus que le minimum du menu
// Lecture : nombre commandé >= (minimum du menu + écart requis)
const remiseApplicable = nombrePersonnesCommandees >= (nombrePersonnesMinimum + PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE);
console.log("La remise est applicable : " + remiseApplicable);

// Rappel : TAUX_REMISE est une fraction (x % = x / 100) : il se multiplie directement, sans diviser par 100
// Lecture : montant de la remise = prix de la commande avant remise × taux de remise
// La remise ne s'applique que si remiseApplicable est vrai
let montantRemise = 0;

if (remiseApplicable) {
    montantRemise = prixCommandeAvantRemise * TAUX_REMISE;
}
console.log("Le montant de la remise est : " + montantRemise + " euros.");

const prixCommandeApresRemise = prixCommandeAvantRemise - montantRemise;
console.log("Le prix de la commande après remise est : " + prixCommandeApresRemise + " euros.");

// Lecture : à Bordeaux = forfait ; hors Bordeaux = forfait + prix par km × distance
let fraisLivraisonCommande;

if (livraisonABordeaux) {
    fraisLivraisonCommande = FRAIS_LIVRAISON_FORFAITAIRES;
} else {
    fraisLivraisonCommande = FRAIS_LIVRAISON_FORFAITAIRES + PRIX_PAR_KM_HORS_BORDEAUX * distancePourLivraison;
}
console.log("Les frais de livraison sont : " + fraisLivraisonCommande + " euros.");

// Lecture : total = prix après remise + frais de livraison
const prixCommandeTotalAvecLivraison = prixCommandeApresRemise + fraisLivraisonCommande;
console.log("Le prix final à payer, livraison incluse, est : " + prixCommandeTotalAvecLivraison + " euros.");

// Résumé de la commande, ou message si elle est impossible
if (commandePossible) {
    const resumeCommande = "Commande de " + nombrePersonnesCommandees + " personnes : " + prixCommandeAvantRemise + " euros avant remise, " + montantRemise + " euros de remise, " + fraisLivraisonCommande + " euros de livraison, total " + prixCommandeTotalAvecLivraison + " euros.";
    console.log(resumeCommande);
} else {
    console.log("Commande impossible : " + nombrePersonnesCommandees + " personnes, le minimum de ce menu est de " + nombrePersonnesMinimum + " personnes.");
}

// Grille de prix selon le nombre de personnes
const nombrePersonnesMaxGrille = 15;
for (let nombrePersonnes = nombrePersonnesMinimum; nombrePersonnes <= nombrePersonnesMaxGrille; nombrePersonnes++) {
    const prixGrille = prixParPersonne * nombrePersonnes;
    console.log(`${nombrePersonnes} personnes : ${prixGrille} euros.`);
}

// Frais de livraison hors Bordeaux selon la distance
// Jeu de test : distances inventées, en km
const distancesVillesHorsBordeaux = [5, 12, 20, 30];
for (const distanceVilleHorsBordeaux of distancesVillesHorsBordeaux) {
    const fraisLivraisonVille = FRAIS_LIVRAISON_FORFAITAIRES + PRIX_PAR_KM_HORS_BORDEAUX * distanceVilleHorsBordeaux;
    console.log(`${distanceVilleHorsBordeaux} km : ${fraisLivraisonVille} euros.`);
}

// Test : une saisie de formulaire est une chaîne, même si elle contient un nombre
const nombrePersonnesSaisie = "11";
console.log("Saisie : " + nombrePersonnesSaisie);
console.log("Saisie + 1 : " + (nombrePersonnesSaisie + 1));
console.log("Saisie * 2 : " + (nombrePersonnesSaisie * 2));
console.log("typeof saisie : " + typeof nombrePersonnesSaisie);
