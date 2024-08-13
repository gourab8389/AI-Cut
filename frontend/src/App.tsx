
function App() {

  return (
    <>
      <main className="max-w-2xl mx-auto flex px-4">
        <div className="py-8">
          <h1 className=" text-4xl font-bold uppercase mb-8">Url to Video<br />With power of AI</h1>

          <form className="grid gap-2">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
              type="url"
              placeholder="https://..." 
            />
            <button
              className="bg-emerald-500 rounded-full text-white px-4 py-2"
              type="submit">
              Create&nbsp;Video
            </button>
          </form>
        </div>


        <div className="p-8">
          <div className="bg-gray-200 w-[240px] h-[380px]">

          </div>
        </div>
      </main>
    </>
  )
}

export default App
