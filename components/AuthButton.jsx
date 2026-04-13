"use client";

import React from "react";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { useState } from "react";

const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <>
        <form action={() => {}}>
          <Button variant="ghost" size="lg" type="submit" className="gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </form>
      </>
    );
  }

  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="default"
        size="lg"
        className="bg-red-600 hover:bg-red-700 gap-2">
        <LogIn className="w-4 h-4" />
        Sign In
      </Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default AuthButton;
