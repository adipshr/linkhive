import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginPage() {
  return (
    <div className="bg-white border p-4 max-w-xs mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
      <button className="bg-blue-500 text-white text-center w-full py-4 flex gap-2 justify-center">
        <FontAwesomeIcon icon={faGoogle} className="w-6" />
        <span>Sign In with Google</span>
      </button>
    </div>
  );
}
