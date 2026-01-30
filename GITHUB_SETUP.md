# GitHub Repository Setup - haus-messmer

## Schritt 1: Repository auf GitHub erstellen

Gehe zu: https://github.com/new

- **Repository name**: `haus-messmer`
- **Visibility**: Private ✓
- **NICHT** "Initialize this repository with a README" anklicken
- Klicke auf "Create repository"

## Schritt 2: Git konfigurieren und pushen

Nach dem Erstellen des Repositories auf GitHub, führe diese Befehle aus:

```bash
# 1. Alle Dateien zum Staging hinzufügen
git add .

# 2. Ersten Commit erstellen
git commit -m "Initial commit: Haus Messmer website with GitHub Pages setup"

# 3. Main Branch umbenennen (falls nötig)
git branch -M main

# 4. Remote Repository hinzufügen (ERSETZE 'DEIN-USERNAME' mit deinem GitHub Username!)
git remote add origin https://github.com/DEIN-USERNAME/haus-messmer.git

# 5. Code zu GitHub pushen
git push -u origin main
```

## Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Klicke auf **Pages** im linken Menü
4. Unter **Source** wähle: **GitHub Actions**
5. Speichern (wird automatisch gespeichert)

## Schritt 4: Deployment überwachen

1. Gehe zum **Actions** Tab in deinem Repository
2. Der Workflow "Deploy to GitHub Pages" sollte automatisch starten
3. Warte bis der Workflow erfolgreich abgeschlossen ist (grüner Haken)
4. Deine Website ist dann verfügbar unter:
   ```
   https://DEIN-USERNAME.github.io/haus-messmer/
   ```

## Alternative: GitHub CLI verwenden

Falls du GitHub CLI installiert hast:

```bash
# Repository erstellen und pushen in einem Schritt
gh repo create haus-messmer --private --source=. --remote=origin --push
```

Dann nur noch GitHub Pages in den Settings aktivieren.

---

> [!IMPORTANT]
> Vergiss nicht, `DEIN-USERNAME` durch deinen tatsächlichen GitHub-Benutzernamen zu ersetzen!
