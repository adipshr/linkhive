"use client";

import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { Session } from "next-auth";

function LoginWithGoogle() {
  console.log(Session)
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-500 text-white text-center w-full py-4 flex gap-3 justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign In with Google</span>
    </button>
  );
}

export default LoginWithGoogle;
