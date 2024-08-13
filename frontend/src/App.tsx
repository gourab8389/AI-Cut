
function App() {

  return (
    <>
      <main className="max-w-2xl mx-auto flex flex-col md:flex-row md:gap-8 gap-16 px-4 py-10">
        <div className="py-8 flex flex-col justify-center">
          <h1 className=" text-4xl font-bold uppercase mb-8">
            <span className="bg-gradient-to-br from-emerald-100 to-sky-100 bg-clip-text text-transparent">Url to Video</span>
            <br /><span className="bg-gradient-to-br from-emerald-400 from-30% to-sky-400 bg-clip-text text-transparent">With power of AI</span></h1>

          <form className="grid gap-4">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
              type="url"
              placeholder="https://..." 
            />
            <button
              className="bg-emerald-500 rounded-full text-white px-4 py-2 uppercase hover:bg-gradient-to-br from-emerald-600 to-cyan-600 font-bold"
              type="submit">
              Create&nbsp;Video
            </button>
          </form>
        </div>


        <div className="py-8">
          <div className="bg-gray-200 md:w-[240px] h-[380px] w-full text-gray-500 rounded-2xl p-8">
            video here
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
