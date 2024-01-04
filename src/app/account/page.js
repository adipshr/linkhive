import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function AccountPage({ searchParams }) {
  const desiredUsername = searchParams?.desiredUsername;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <form>
        <h1 className="text-3xl font-bold text-center">Grab your username</h1>
        <p className="text-center pt-2">Choose your username</p>
        <div className="max-w-xs mx-auto">
          <input
            className=" block border w-full mt-2 mb-2 p-2"
            defaultValue={desiredUsername}
          ></input>
          <button className="block bg-blue-500 w-full mt-3 text-white px-4 py-3 rounded-sm	">
            Claim your username
            <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
          </button>
        </div>
      </form>
    </>
  );
}
