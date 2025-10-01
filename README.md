
# 🚀 React Starter Template  

This is a **production-ready React starter template** that includes:  

- ⚛️ React 18 with **TypeScript**  
- 🛠️ **Redux Toolkit** with dynamic reducer injection  
- 🌐 **RTK Query** with Axios base query for API calls  
- 🎨 **TailwindCSS** for styling  
- 🌙 **Theme management** (light/dark mode)  
- 🌏 **Language support** with dynamic content merging  
- 🧩 **Lazy-loaded routes** and modular structure  

This template is designed for **scalable, maintainable React projects**.  

---

## 📂 Folder Structure  

```
src/
├── api/                 # API client & RTK Query setup
├── components/          # React pages/components
├── contents/            # Multi-language content system
├── hooks/               # Custom hooks & context providers
├── routes/              # App routing
├── store/               # Redux store setup
├── types/               # Shared type definitions
├── utils/               # Utility helpers
├── App.tsx
├── main.tsx
└── index.css
```

---

## ✨ Features  

- **Redux Toolkit** with dynamic reducer injection  
- **RTK Query** for API calls with `axiosBaseQuery`  
- Configurable **Axios client** with interceptors  
- **Light/Dark mode toggle** stored in `localStorage`  
- **Internationalization (i18n)** with `_base` + language overrides  
- **Lazy-loaded routes** with React Router v6  

---

## 🛠️ Installation & Setup  

### 1. Clone the repo  
```bash
git clone https://github.com/your-username/react-starter-template.git
cd react-starter-template
```

### 2. Install dependencies  
```bash
npm install
# or
yarn install
```

### 3. Run in development  
```bash
npm run dev
```

### 4. Build for production  
```bash
npm run build
```

### 5. Preview build  
```bash
npm run preview
```

---

## 🌐 API Example  

```ts
// userApi.ts
getUsers: builder.query<any[], void>({
  query: () => ({ url: "/users", method: "get" }),
});
```

Usage:  
```tsx
const { data, isLoading, error } = useGetUsersQuery();
```

---

## 🎨 Theming  

```tsx
const { isDarkMode, toggleDarkMode, colors } = useTheme();
```

---

## 🌏 Language Switching  

```tsx
const { language, setLanguage } = useLanguage();
setLanguage(Language.ENGLISH);
```

---

## 🧩 Dynamic Reducer Injection  

```tsx
useInjectReducer("counter", counterReducer);
```

---

## 🔗 Example Routes  

- `/` → Home page with counter  
- `/about` → Fetches & displays users  

---

## 📘 How to Use Guide  

### ➕ Add a new Page  
1. Create a file in `src/components/pages/MyPage.tsx`.  
2. Update `src/routes/config.ts`:  
   ```ts
   {
     path: "/mypage",
     element: lazy(() => import("../components/pages/MyPage")),
     contentKey: "homepage", // optional
   }
   ```  

### ➕ Add a new API Endpoint  
1. Extend `baseApi` via `injectEndpoints`.  
2. Use generated hooks in components.  

### ➕ Add a new Language  
1. Create a folder `src/contents/spanish/`.  
2. Add overrides like `homepage.ts`.  
3. Register in `Language.ts`:  
   ```ts
   export const Language = {
       ENGLISH: "english",
       HINDI: "hindi",
       SPANISH: "spanish",
   } as const;
   ```  

### ➕ Add a new Slice  
1. Create a slice in `store/slices/`.  
2. Inject dynamically with `useInjectReducer("sliceName", sliceReducer);`.  

---

# 🐳 Docker Deployment  

### 📌 Why use Docker?  
- ✅ Consistent environment across dev & prod  
- ✅ Easy to share and run anywhere  
- ✅ Multi-stage build keeps images small  
- ✅ Hot reloading in dev, optimized build in prod  

---

### 1. Dockerfile (Production with Nginx)  

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### 2. nginx.conf (for SPA routing)  

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;
}
```

---

### 3. docker-compose.yml  

```yaml
version: "3.9"

services:
  react-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:80"
    container_name: react-starter
    restart: unless-stopped

  react-dev:
    image: node:20-alpine
    working_dir: /app
    volumes:
      - .:/app
      - /app/node_modules
    command: sh -c "npm install && npm run dev -- --host"
    ports:
      - "5173:5173"
    container_name: react-starter-dev
    environment:
      - CHOKIDAR_USEPOLLING=true
```

---

### 🚀 Usage  

#### Development (Hot Reload)  
```bash
docker compose up react-dev
```
App available at 👉 `http://localhost:5173`  

#### Production (Optimized with Nginx)  
```bash
docker compose up --build react-app
```
App available at 👉 `http://localhost:3000`  

---

# ▲ Vercel Deployment  

You can also deploy this app **serverlessly** on Vercel.  

### Steps:  
1. Push your repo to **GitHub/GitLab/Bitbucket**.  
2. Go to [Vercel](https://vercel.com) → Import Project.  
3. Configure build settings:  
   - **Framework Preset:** `Vite`  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
   - **Install Command:** `npm install`  
4. Click **Deploy** 🎉  

Your app will be live at:  
```
https://your-project-name.vercel.app
```  

---

## 📜 License  

MIT – free to use, modify, and distribute.  
