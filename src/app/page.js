export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br></br>for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links,social profiles, contact info and more on one page
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg">
          <span className="py-4 bg-white pl-5">linkhive.to/</span>
          <input
            type="text"
            className="py-4 outline-none"
            placeholder="username"
          />
          <button type="submit" className="bg-blue-500 text-white py-4 px-6">
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}
