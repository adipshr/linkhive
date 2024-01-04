"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function HeroForm() {
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);

  const [username, setUsername] = useState("");

  async function handelSubmit(event) {
    event.preventDefault();
    console.log(username);
    if (username.length > 0) {
      window.localStorage.setItem("desiredUsername", username);

      await signIn("google");
    }
  }

  return (
    <>
      <form
        className="inline-flex items-center shadow-lg"
        onSubmit={handelSubmit}
      >
        <span className="py-4 bg-white pl-5">linkhive.to/</span>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="py-4 outline-none"
          placeholder="username"
        />
        <button type="submit" className="bg-blue-500 text-white py-4 px-6">
          Join for free
        </button>
      </form>
    </>
  );
}

export default HeroForm;
