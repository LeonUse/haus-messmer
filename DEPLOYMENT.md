# GitHub Pages Deployment Guide

Dieses Projekt ist für die Bereitstellung auf GitHub Pages konfiguriert.

## Automatisches Deployment

Das Projekt wird automatisch auf GitHub Pages bereitgestellt, wenn Änderungen auf den `main` Branch gepusht werden.

### Erstmalige Einrichtung

1. **Repository auf GitHub erstellen** (falls noch nicht geschehen)
   ```bash
   git remote add origin https://github.com/DEIN-USERNAME/haus-messmer.git
   ```

2. **GitHub Pages aktivieren**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf **Settings** → **Pages**
   - Unter **Source** wähle: **GitHub Actions**
   - Speichern

3. **Code pushen**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push -u origin main
   ```

4. **Deployment überwachen**
   - Gehe zu **Actions** Tab in deinem Repository
   - Der Workflow "Deploy to GitHub Pages" sollte automatisch starten
   - Nach erfolgreichem Abschluss ist die Website verfügbar unter:
     `https://DEIN-USERNAME.github.io/haus-messmer/`

## Manuelles Deployment (Optional)

Falls du manuell deployen möchtest:

```bash
npm install
npm run deploy
```

Dies baut das Projekt und pusht es auf den `gh-pages` Branch.

## Eigene Domain verwenden

Falls du eine eigene Domain verwenden möchtest (z.B. `haus-messmer.de`):

1. **Vite Konfiguration anpassen**
   - Öffne `vite.config.ts`
   - Ändere `base: '/haus-messmer/'` zu `base: '/'`

2. **CNAME Datei erstellen**
   - Erstelle eine Datei `public/CNAME`
   - Füge deine Domain hinzu: `haus-messmer.de`

3. **DNS konfigurieren**
   - Füge einen CNAME Record hinzu, der auf `DEIN-USERNAME.github.io` zeigt
   - Oder A Records für GitHub Pages IPs

4. **In GitHub Settings**
   - Gehe zu **Settings** → **Pages**
   - Gib deine Custom Domain ein
   - Aktiviere "Enforce HTTPS"

## Troubleshooting

### Seiten laden nicht korrekt
- Überprüfe, dass der `base` Pfad in `vite.config.ts` korrekt ist
- Bei eigener Domain sollte `base: '/'` sein
- Bei GitHub Pages Subdomain sollte `base: '/repository-name/'` sein

### 404 Fehler bei Unterseiten
- Die `404.html` und das Redirect-Script in `index.html` sollten dies beheben
- Stelle sicher, dass beide Dateien korrekt deployed wurden

### Build schlägt fehl
- Überprüfe die GitHub Actions Logs im **Actions** Tab
- Stelle sicher, dass alle Dependencies korrekt installiert sind
- Teste lokal mit `npm run build`

### Änderungen werden nicht angezeigt
- Leere den Browser-Cache (Strg + Shift + R)
- Warte einige Minuten, da GitHub Pages Caching verwendet
- Überprüfe, ob der GitHub Actions Workflow erfolgreich war

## Lokales Testen des Production Builds

```bash
npm run build
npm run preview
```

Dies baut das Projekt und startet einen lokalen Server mit dem Production Build.
