// Vérifier que le fichier est bien relié à la page.
console.log("script.js chargé");

// Jeu de test : valeurs inventées, prix en euros
const prixPourPersonnesMinimum = 120;
const nombrePersonnesMinimum = 6;
console.log("Le prix du menu (minimum de personnes imposé) est : " + prixPourPersonnesMinimum + " euros, le nombre de personnes minimum pour commander ce menu est : " + nombrePersonnesMinimum + ".");

// Jeu de test pour une livraison hors Bordeaux : valeurs inventées, distance mesurée en km
const nombrePersonnesCommandees = 11;
const distancePourLivraison = 12;
console.log("Le nombre de personnes commandées pour ce menu est : " + nombrePersonnesCommandees + ", la distance de livraison est : " + distancePourLivraison + " km.");

// Règles imposées par l'énoncé "Vite & Gourmand", prix en euros, taux en fraction
const FRAIS_LIVRAISON_FORFAITAIRES = 5;
const PRIX_PAR_KM_HORS_BORDEAUX = 0.59;
const TAUX_REMISE = 0.10;
const PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE = 5;

// Calculs de la commande
const prixParPersonne = prixPourPersonnesMinimum / nombrePersonnesMinimum;
console.log("Le prix par personne est : " + prixParPersonne + " euros.");

const prixCommandeAvantRemise = prixParPersonne * nombrePersonnesCommandees;
console.log("Le prix de la commande avant remise est : " + prixCommandeAvantRemise + " euros.");

// Règle de l'énoncé : remise si la commande compte au moins N personnes de plus que le minimum du menu.
// Lecture : nombre commandé >= (minimum du menu + écart requis)
const remiseApplicable = nombrePersonnesCommandees >= (nombrePersonnesMinimum + PERSONNES_EN_PLUS_DU_MINIMUM_POUR_REMISE);
console.log("La remise est applicable : " + remiseApplicable);


// Lecture : montant de la remise = prix de la commande avant remise × taux de remise
// Rappel : TAUX_REMISE est une fraction (x % = x / 100) : il se multiplie directement, sans diviser par 100
const montantRemise = prixCommandeAvantRemise * TAUX_REMISE;
console.log("Le montant de la remise est : " + montantRemise + " euros.");

const prixCommandeApresRemise = prixCommandeAvantRemise - montantRemise;
console.log("Le prix de la commande après remise est : " + prixCommandeApresRemise + " euros.");

// La règle de l’énoncé : livraison forfaitaire (fixe)+ prix par km hors bordeaux (fixe) par kilomètre hors Bordeaux (jeu de test)
const fraisLivraisonCommande = FRAIS_LIVRAISON_FORFAITAIRES + PRIX_PAR_KM_HORS_BORDEAUX * distancePourLivraison;
console.log("Les frais de livraison sont : " + fraisLivraisonCommande + " euros.");

// La règle de l’énoncé : Le total, c’est ce que le client paie au final (avec deux résultats déjà calculés)
// Résultat attendu : 210.08.
const prixCommandeTotalAvecLivraison = prixCommandeApresRemise + fraisLivraisonCommande;
console.log("Le prix final à payer livraison incluse est : " + prixCommandeTotalAvecLivraison + " euros.");

// Test : une saisie de formulaire est une chaîne, même si elle contient un nombre
const nombrePersonnesSaisie = "11";
console.log("Saisie : " + nombrePersonnesSaisie);
console.log("Saisie + 1 : " + (nombrePersonnesSaisie + 1));
console.log("Saisie * 2 : " + nombrePersonnesSaisie * 2);
console.log("typeof saisie : " + typeof nombrePersonnesSaisie);

// Résumé de la commande en une phrase
const resumeCommande = "Commande de " + nombrePersonnesCommandees + " personnes : " + prixCommandeAvantRemise + " euros avant remise, " + montantRemise + " euros de remise, " + fraisLivraisonCommande + " euros de livraison, total " + prixCommandeTotalAvecLivraison + " euros.";
console.log(resumeCommande);
