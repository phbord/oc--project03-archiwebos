# README

## 1. NAVIGATION
### Groupe de filtres
- rafraîchit les images selon la catégorie
### Bouton "login"
- création et ajout d'un token dans le localstorage
- connexion au mode "administrateur"
- accès aux boutons "modifier"
- affichage de la barre "Mode édition"
  - permet de rafraîchir les images
### Bouton "logout"
- déconnexion
- suppression du token du localstorage
### Boutons "modifier"
- ouvre la modale
### Modale
- bouton "croix" et "backdrop" : ferme la modale
- bouton "flèche" : revient à l'étape précédente 
- boutons "poubelle" : supprime une image
- bouton "ajouter une photo" : dirige vers l'étape suivante
- bouton "valider"
  - inactif par défaut
  - actif et ajoute une nouvelle image, si les 3 champs sont remplis

## 2. FONTIONNALITES

### Arborescence
- ```index.js``` et ```login.js```
  - centralisent toutes les fichiers externes pour une page donnée
- dossier ```models``` : requêtes
- dossier ```commons``` : regroupe des fonctions

### Notations
- ```__maFonction```
  - fonctions utilisées uniquement dans des fonctions
  - internes au fichier