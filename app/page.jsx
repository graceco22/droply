import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Rabbit, Shield, Bell } from "lucide-react";
import Image from "next/image";
import AddProductForm from "../components/AddProductForm.jsx";

export default function Home() {
  const user = null;
  const products = [];
  const FEATURES = [
    {
      icon: Rabbit,
      title: "Fast and Efficient",
      description:
        "Droply extracts prices in seconds, handling JavaScript and dynamic content.",
    },
    {
      icon: Shield,
      title: "Secure and Private",
      description:
        "Works across all major e-commerce sites with built-in anti-bot measures, ensuring your data is safe.",
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description:
        "Get instant notifications when prices drop, so you never miss a deal.",
    },
  ];
  return (
    <main className="min-h-screen bg-linear-to-br from-red-100 via-white mask-t-to-red-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px=4 py=4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={"/droply1.png"}
              alt="Deal drop logo"
              width={600}
              height={200}
              className="h-20 w-auto"
            />
          </div>

          {/* Auth Button */}
          <Button
            variant="default"
            size="lg"
            className="bg-red-600 hover:bg-red-700 gap-2">
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Made to save you money
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Always Know When Prices Drop
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            With Droply, you can easily monitor price changes across your
            favorite e-commerce sites and receive instant notifications when
            prices drop.
          </p>
        </div>

        {/* Add Product Form */}
        <AddProductForm user={user} />

        {/* Features */}
        {products.length === 0 && (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
