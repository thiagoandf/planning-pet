
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-8">Planning Pet</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start a new game
      </button>

      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-xl">Or join an existing game</p>

        <div className="flex flex-row mt-4">
          <input
            className="bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Enter game code"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Join
          </button>
        </div>
      </div>
    </main>
  )
}
