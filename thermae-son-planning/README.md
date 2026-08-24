# Thermae Son Planning

Planning- en urenregistratie voor medewerkers van Thermae Son.

## Techniek
- React + Vite
- Supabase Authentication
- Supabase PostgreSQL
- Row Level Security

## Rollen
- `employee`: eigen uren, beschikbaarheid en rooster
- `admin`: planning en personeelsbeheer
- `developer`: technische eigenaar/onderhoud

## Lokaal starten
1. `npm install`
2. Maak `.env.local` met `VITE_SUPABASE_URL` en `VITE_SUPABASE_ANON_KEY`.
3. `npm run dev`

Gebruik nooit een Supabase service-role key in de browser.
