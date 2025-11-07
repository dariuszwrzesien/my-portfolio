# Instrukcja deploymentu na GitHub Pages

## 📋 Co zostało skonfigurowane

GitHub Actions workflow (`deploy.yml`) automatycznie:
1. ✅ Sprawdza kod za pomocą ESLint
2. ✅ Weryfikuje formatowanie Prettier
3. ✅ Buduje aplikację główną
4. ✅ Buduje Storybook
5. ✅ Publikuje obie strony na GitHub Pages

## 🚀 Jak uruchomić deployment na GitHub Pages

### Krok 1: Włącz GitHub Pages w repozytorium

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. W menu bocznym kliknij **Pages**
4. W sekcji **Source** wybierz:
   - **Source**: `GitHub Actions`
   
   ![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### Krok 2: Wypchnij zmiany do repozytorium

```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### Krok 3: Sprawdź status deployment

1. Przejdź do zakładki **Actions** w swoim repozytorium
2. Zobaczysz workflow "Build and Deploy" w trakcie wykonywania
3. Po zakończeniu (zielony checkmark ✓), deployment jest gotowy!

## 🌐 Adresy URL

Po udanym deployment, twoje strony będą dostępne pod adresami:

- **Portfolio**: `https://<twoja-nazwa-użytkownika>.github.io/my-portfolio/`
- **Storybook**: `https://<twoja-nazwa-użytkownika>.github.io/my-portfolio/storybook/`
- **Welcome Page**: `https://<twoja-nazwa-użytkownika>.github.io/my-portfolio/welcome.html`

## 📦 Struktura workflow

```yaml
quality-checks (ESLint + Prettier)
    ↓
    ├─→ build-app (Budowanie aplikacji)
    └─→ build-storybook (Budowanie Storybook)
            ↓
        deploy (Publikacja na GitHub Pages)
```

## 🔧 Nowe skrypty NPM

Dodane zostały nowe skrypty:

```bash
# Formatowanie kodu
npm run format

# Sprawdzenie formatowania (używane w CI)
npm run format:check
```

## 📝 Pliki konfiguracyjne

### `.prettierrc`
Konfiguracja Prettier do spójnego formatowania kodu.

### `.prettierignore`
Lista plików i katalogów ignorowanych przez Prettier.

### `vite.config.ts`
Zaktualizowany z `base: '/my-portfolio/'` dla poprawnego działania na GitHub Pages.

## ⚙️ Workflow triggers

Workflow uruchamia się automatycznie:
- ✅ Przy push do brancha `main`
- ✅ Przy pull request do brancha `main` (tylko testy, bez deploymentu)
- ✅ Ręcznie z zakładki Actions (workflow_dispatch)

## 🛡️ Uprawnienia

Workflow ma następujące uprawnienia:
- `contents: read` - odczyt kodu
- `pages: write` - zapis do GitHub Pages
- `id-token: write` - autoryzacja deployment

## 🎯 Jak testować lokalnie

```bash
# Sprawdź lint
npm run lint

# Sprawdź formatowanie
npm run format:check

# Zbuduj aplikację
npm run build

# Zbuduj Storybook
npm run build-storybook

# Podgląd lokalny
npm run preview
```

## 🐛 Troubleshooting

### Deployment się nie uruchamia
- Upewnij się, że GitHub Pages jest włączony z opcją "GitHub Actions"
- Sprawdź uprawnienia w Settings → Actions → General → Workflow permissions

### 404 po deployment
- Sprawdź czy `base: '/my-portfolio/'` w `vite.config.ts` jest poprawny
- Upewnij się, że nazwa repozytorium się zgadza

### Aplikacja nie działa poprawnie
- Sprawdź console w przeglądarce
- Upewnij się, że wszystkie ścieżki są relatywne lub używają `import.meta.env.BASE_URL`

## 📚 Dodatkowe zasoby

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## 🎨 Customizacja

### Zmiana nazwy repozytorium
Jeśli nazwa repozytorium jest inna niż `my-portfolio`, zaktualizuj:

```typescript
// vite.config.ts
base: process.env.NODE_ENV === 'production' ? '/nazwa-repo/' : '/',
```

### Deployment na custom domain
1. Dodaj plik `CNAME` w `public/` z twoją domeną
2. Zaktualizuj `base: '/'` w `vite.config.ts`
3. Skonfiguruj DNS u swojego dostawcy domeny

### Deployment tylko Storybook
Jeśli chcesz deployować tylko Storybook, możesz usunąć job `build-app` z workflow.

---

**Powodzenia z deploymentem! 🚀**

