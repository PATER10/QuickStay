# QuickStay

Instrukcja uruchomienia projektu lokalnie i na Vercel.

## Wymagania

- Node.js 18+
- npm
- Konto i klucze: MongoDB Atlas, Cloudinary, Clerk

## Struktura

- `client` — frontend React (Vite)
- `server` — backend Express + MongoDB

## 1) Konfiguracja `.env`

### `server/.env`

Utwórz plik `server/.env` i dodaj:

```env
MONGODB_URI=your_mongodb_connection_string_without_db_name
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_WEBHOOK_SECRET=your_webhook_secret
PORT=3000
```

> Uwaga: baza jest doklejana w kodzie jako `/hotel-booking`, więc `MONGODB_URI` podaj bez nazwy bazy na końcu.

### `client/.env`

Utwórz plik `client/.env` i dodaj:

```env
VITE_BACKEND_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=$
```

## 2) Instalacja zależności

W dwóch terminalach:

```bash
cd server
npm install
```

```bash
cd client
npm install
```

## 3) Uruchomienie lokalne

### Backend

```bash
cd server
npm run server
```

Backend działa na `http://localhost:3000`.

### Frontend

```bash
cd client
npm run dev
```

Frontend działa zwykle na `http://localhost:5173`.

## 4) Build frontendu

```bash
cd client
npm run build
```

## 5) Link do Vercel 

https://quickstay-pi-steel.vercel.app


