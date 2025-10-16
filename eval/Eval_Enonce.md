# Évaluation Git / GitHub - Mini-CRUD HTML/JS/JSON

## Étape 1 : Initialisation du dépôt et premier commit (15-20 min)

- Créez un nouveau dossier pour le projet.
- Placez-y les fichiers fournis : `index.html`, `app.js` et `data.js`.
- Mettez en place un système de gestion de versions sur ce projet local.
- Poussez cette première version sur un dépôt distant accessible en ligne.

***

## Étape 2 : Utilisation des branches et développement d’une fonctionnalité (30-35 min)

- Créez une nouvelle branche dédiée au développement d’une fonctionnalité.
- Implémentez une fonctionnalité permettant la modification du titre d’un livre via l’interface HTML.
- Lorsque la fonctionnalité est prête, intégrez-la à la branche principale.
- Nettoyez les branches inutiles localement et à distance.

***

## Étape 3 : Simulation et résolution d’un conflit (35-40 min)

- Depuis votre dépôt local, créez deux branche
- Dans la première branche, modifiez la donnée d’un livre dans le fichier `data.js` ainsi que la logique associée dans le fichier `app.js`.
- Dans la deuxième branche, modifiez la même portion du fichier `data.js` différemment, et effectuez également une autre modification dans le fichier `app.js`.
- Tentez de fusionner ces deux branches dans la branche principale sur l’un des dépôts, ce qui doit provoquer un conflit.
- Traitez ce conflit, en veillant à conserver les modifications cohérentes issues des deux branches.
- Finalisez la fusion et poussez les modifications résolues.

***

## Étape 4 : Manipulation avancée de l’historique (20-25 min)

- Parcourez l’historique des modifications du projet.
- Utilisez des moyens adaptés pour retrouver un état antérieur du projet.
- Annulez intelligemment un changement récent, sans perdre l’historique.
- Poussez votre travail finalisé vers le dépôt distant.
***

## Étape 5 : Ajout d'une pipeline CI/CD (25-30 min)

- Créez un fichier de gestion de CI/CD
- Créez un stage de `build` qui affiche votre nom d'utilisateur gitlab.
- Créez un stage de `test` qui affiche la branche sur laquelle se déroule votre pipeline.
- Poussez votre travail finalisé vers le dépôt distant.

***

Le but de cette évaluation est de mesurer votre capacité à gérer un projet avec Git, GitHub et GitLab de manière autonome, à collaborer via les branches, à résoudre des conflits, à manipuler l’historique et à créer une pipeline. Tout ceci en maintenant un projet fonctionnel basé sur un mini-CRUD.

***
