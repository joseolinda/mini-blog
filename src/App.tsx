import RouteError from "./pages/RouteError"
import Home from "./pages/Home"

function App({ isError } : { isError: boolean }) {

  return (
    <div className="bg-gray-600 flex flex-col min-h-screen justify-between">
      {isError ? (<RouteError />) : (
        <Home />
      )}
    </div>
  )
}

export default App
