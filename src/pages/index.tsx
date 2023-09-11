import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-screen h-screen flex justify-center align-center p-4 ${inter.className}`}
    >
      This Project Only Works on Storybook
    </main>
  );
}
