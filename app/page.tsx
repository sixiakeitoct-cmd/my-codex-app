{
  "name": "codex-next-app",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Codex × Next.js 🚀</h1>
      <p>これは Next.js(App Router) の最小ページです。</p>
    </main>
  );
}
