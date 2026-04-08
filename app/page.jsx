import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white mask-t-to-red-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 flex justify-between items-center">
        <div className="max-w-7xl mx-auto px=4 py=4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={"/droply1.png"}
              alt="Deal drop logo"
              width={600}
              height={200}
              className="h-10 w-auto"
            />
          </div>

          {/* Auth Button */}
          <Button
            variant="default"
            size="sm"
            className="bg-red-600 hover:bg-red-700 gap-2">
            <LogIn />
            Sign In
          </Button>
        </div>
      </header>
    </main>
  );
}
