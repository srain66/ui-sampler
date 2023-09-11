import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <main
      className={`w-screen h-screen flex flex-col justify-center items-center p-4 gap-2 ${inter.className}`}
    >
      This Project Only Works on Storybook
      {isProduction ? (
        <a href={process.env.URL}>{process.env.URL}</a>
      ) : (
        <pre className="w-full max-w-xs bg-black rounded p-4 text-white">
          npm ci
          <br />
          npm run storybook
        </pre>
      )}
    </main>
  );
}
