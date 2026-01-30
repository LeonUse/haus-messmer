# AGENTS.md — Antigravity Agent Guide
## React + TypeScript + MUI Website
## Pension (Zimmervermietung) & Naturheilpraxis
## 🌍 i18n IST PFLICHT

---

## 0) Mission
Du bist der Engineering-Agent für eine moderne, wartbare Website mit:

- React + TypeScript
- Vite
- MUI (Material UI) + Emotion
- **Internationalisierung (i18n) – verpflichtend**

Die Website besteht aus **zwei klar getrennten, aber gestalterisch verbundenen Bereichen**:
1) **Pension / Zimmervermietung**
2) **Naturheilpraxis**

Ziel: Seriosität, Klarheit, Mobile-First, gute Lesbarkeit, saubere Architektur.

---

## 1) Absolute Regeln (nicht verhandelbar)

### 🌍 Internationalisierung (i18n – PFLICHT)
- **KEIN sichtbarer Text darf hardcodiert werden**
- Jeder String läuft über `i18n`
- Gilt für:
  - Überschriften
  - Buttons
  - Navigation
  - Form Labels & Placeholder
  - Fehler- & Success-Meldungen
  - SEO Titles & Descriptions
  - ARIA-Labels

❌ Verboten:
```tsx
<Typography>Kontakt</Typography>
```

✅ Erlaubt:
```tsx
<Typography>{t('navigation.contact')}</Typography>
```

---

## 2) Tech Stack (fix)
- Vite
- React + TypeScript (`strict: true`)
- MUI + Emotion
- react-router-dom
- react-i18next
- i18next-browser-languagedetector

Kein Backend in Phase 1, keine Payment-Integration.

---

## 3) i18n Architektur (verbindlich)

### Sprachen
- `de` (Primärsprache)
- `en` (Pflicht)
- Struktur offen für weitere Sprachen (`fr`, etc.)

### Ordnerstruktur
```txt
src/i18n/
├── index.ts
├── config.ts
├── locales/
│   ├── de/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── pension.json
│   │   ├── praxis.json
│   │   ├── forms.json
│   │   └── seo.json
│   └── en/
│       ├── common.json
│       ├── navigation.json
│       ├── pension.json
│       ├── praxis.json
│       ├── forms.json
│       └── seo.json
```

### Regeln
- Keine Texte im Code
- Keys sprechend & stabil
- Keine doppelten Keys
- Jeder neue Key **immer DE + EN**

---

## 4) i18n Namespaces & Verantwortung

| Namespace | Inhalt |
|--------|------|
| `common` | Buttons, Labels, generische Texte |
| `navigation` | Menüs, Footer, Breadcrumbs |
| `pension` | Zimmer, Preise, Lage, FAQ |
| `praxis` | Leistungen, Verfahren, Ablauf |
| `forms` | Formulare, Validierung, Meldungen |
| `seo` | Title & Meta Description |

---

## 5) Seiten & Routing (i18n-aware)

### Global
- `/`
- `/contact`
- `/imprint`
- `/privacy`

### Pension
- `/pension`
- `/pension/rooms`
- `/pension/rooms/:id`
- `/pension/prices`
- `/pension/location`
- `/pension/faq`

### Naturheilpraxis
- `/praxis`
- `/praxis/services`
- `/praxis/therapy-focus`
- `/praxis/process`
- `/praxis/appointment`
- `/praxis/faq`

➡️ Navigation, Breadcrumbs & Seitentitel immer aus i18n.

---

## 6) SEO (Pflicht)
- Jede Seite bekommt:
  - `seo.title`
  - `seo.description`
- Titel & Meta sprachabhängig setzen
- Keine festen Strings in Meta-Tags

---

## 7) Content Handling (sehr wichtig)
- **Kein Content direkt in Komponenten**
- Inhalte ausschließlich über i18n
- Listen über IDs + Übersetzungen

Beispiel:
```ts
const services = ['acupuncture', 'bioresonance']
```

```json
"services": {
  "acupuncture": {
    "title": "Akupunktur",
    "description": "…"
  }
}
```

---

## 8) UI-Komponenten (i18n-safe)
Komponenten dürfen:
- **nur Keys**, keine Texte bekommen

❌:
```tsx
<InfoCard title="Zimmerpreise" />
```

✅:
```tsx
<InfoCard titleKey="pension.prices.title" />
```

---

## 9) Forms (i18n Pflicht)
- Labels
- Placeholder
- Validation
- Error-Texte
- Success-Meldungen

Alles aus `forms.json`.

---

## 10) Responsive Design & Geräteunterstützung (PFLICHT)

Die Website **muss auf allen gängigen Endgeräten und Auflösungen korrekt funktionieren**.

### Zielgeräte & Breakpoints
- Mobile: 320px – 599px
- Tablet: 600px – 899px
- Laptop: 900px – 1199px
- Desktop: ≥1200px
- Große Displays / 4K: ≥1600px

### Verbindliche Regeln
- Mobile-first entwickeln
- MUI Breakpoints (`xs`, `sm`, `md`, `lg`, `xl`) konsequent nutzen
- Keine festen Pixelbreiten für Layouts
- Inhalte dürfen **nie** horizontal überlaufen
- Navigation muss auf Mobile als Drawer / Burger-Menü funktionieren
- Bilder & Galerien müssen responsiv skalieren

### Prüfung
- Jede Seite visuell prüfen auf:
  - Smartphone
  - Tablet
  - Desktop
- Keine überlappenden Texte
- Keine abgeschnittenen Buttons
- Touch-Ziele ausreichend groß

---

## 11) Coding Conventions
- Keine `any`
- Dateien:
  - Komponenten: `PascalCase.tsx`
  - Utils: `camelCase.ts`
- MUI `sx` bevorzugen
- Komponenten >200 Zeilen splitten
- Routen zentral definieren (`routes/paths.ts`)

---

## 12) Definition of Done
Ein Task ist **nicht fertig**, wenn:
- ein Text hardcodiert ist
- ein Key nur in einer Sprache existiert
- SEO-Texte fehlen
- Navigation nicht übersetzbar ist
- das Layout auf einer gängigen Auflösung nicht korrekt dargestellt wird

---

## 13) Agent-Verhalten
- Erst Struktur & i18n, dann UI
- Fehlende Texte → Keys anlegen, nicht improvisieren
- Konsistenz > Geschwindigkeit
- Lieber mehr Keys als magische Strings

---

## 14) Output-Regeln
- Immer vollständige Dateien liefern
- Neue Keys immer DE + EN
- Pfade angeben
- Keine Platzhalter wie „TODO: Text“

---

## 15) Leitsatz
> Wenn ein Text nicht übersetzbar ist, existiert er nicht.
