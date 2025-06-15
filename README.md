# NFC to Bring

Eine React-Web-App, die als Schnittstelle zwischen NFC-Tags und der Bring-App-API funktioniert. Die App ermöglicht es, Lebensmittel per NFC-Tag zu scannen und diese automatisch in der Bring-App zu bestellen.

## Features

- Liste von Lebensmitteln mit NFC-Verknüpfungsstatus
- Generierung von NFC-Links für jedes Lebensmittel
- Integration mit Tasker für Android-NFC-Scans
- Moderne, responsive Benutzeroberfläche mit Bootstrap

## Installation

1. Repository klonen:
```bash
git clone https://github.com/azetxxx/nfc-to-bring.git
cd nfc-to-bring
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm start
```

Die App ist dann unter `http://localhost:3000` erreichbar.

## NFC-Setup mit Tasker

1. **NFC-Tag vorbereiten**
   - Beschreibbaren NFC-Tag besorgen (z.B. NTAG213)
   - NFC auf dem Android-Gerät aktivieren

2. **Tasker einrichten**
   - Tasker aus dem Play Store installieren
   - Neues Profil erstellen (Event > NFC)
   - Task mit "URL öffnen" Aktion erstellen
   - URL format: `http://<deine-domain>/nfc/<lebensmittel-name>`
   - NFC-Tag mit Task verknüpfen

## Deployment

Die App kann auf GitHub Pages gehostet werden:

1. Repository auf GitHub erstellen
2. GitHub Pages in den Repository-Einstellungen aktivieren
3. App deployen:
```bash
npm run deploy
```

## Technologien

- React
- TypeScript
- Bootstrap
- React Router
- GitHub Pages

## Lizenz

MIT
