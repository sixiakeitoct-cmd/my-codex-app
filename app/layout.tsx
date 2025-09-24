import React from "react";

export const metadata = {
  title: "my-codex-app",
  description: "Next.js minimal app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

