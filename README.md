# musik-kunstschule

[![Build Status](https://travis-ci.org/a2-team/musik-kunstschule.svg?branch=master)](https://travis-ci.org/a2-team/musik-kunstschule)

[Build Historie](https://travis-ci.org/a2-team/musik-kunstschule/builds)

# Lokal einrichten
- Repository klonen
- Im Terminal: `npm i` zum installieren der benötigten Node.js Module

# Lokale Entwicklung
- im Terminal: `npm start` und offen lassen für file watching
- im Browser [http://localhost:3002](http://localhost:3002) öffnen

# Manuell Deployment
- im Terminal: `npm run manual-deploy`

# Online Ändern

1. Dateien des Ordners [src/contents](src/contents) anzeigen
2. Datei mit der Endung __.yml__ auswählen und anlicken
3. Rechts auf den Icon mit dem __Stift__ klicken
4. Änderung durchführen
5. Den Tab __Preview changes__ anklicken um die Änderung in der Vorschau zu sehen
6. Unten auf __Commit changes__ klicken

Um zu sehen ob die Änderung erfolgreich war,
muss [auf dieser Seite]([Build Historie](https://travis-ci.org/a2-team/musik-kunstschule/builds)
) ein neuer Eintrag oben erscheinen, evtl. muss die Seite aktualisiert werden.

Bedeutung der Farben:

- __GELB__: aktiv, Zustand noch nicht bekannt
- __GRÜN__: erfolgreich
- __ROT__: fehlgeschlagen
