// Vérifier que le fichier est bien relié à la page.
console.log("script.js chargé");

// Jeu de test : valeurs inventées, prix en euros
const prixPourPersonnesMinimum = 120;
const nombrePersonnesMinimum = 6; 

console.log("Le prix du menu (minimum de personnes imposé) est : " + prixPourPersonnesMinimum + " euros, le nombre de personnes minimum pour commander ce menu est : " + nombrePersonnesMinimum + ".");

// Jeu de test pour une livraison hors Bordeaux : valeurs inventées, distance mesurée en km
const distancePourLivraison = 12;
const nombrePersonnesCommandees = 11;

console.log("Le nombre de personnes commandées pour ce menu est : " + nombrePersonnesCommandees + ", la distance de livraison est : " + distancePourLivraison + " km.");

// Règles imposées par l'énoncé "Vite & Gourmand", prix en euros, taux en fraction
const FRAIS_LIVRAISON_FORFAITAIRES = 5;
const PRIX_PAR_KM_HORS_BORDEAUX = 0.59;
const TAUX_REMISE = 0.10; 
const PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE = 5;

