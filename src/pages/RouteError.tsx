import { LucideFileX2 } from "lucide-react"
import Menu from "../components/layout/Menu"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

function RouteError() {
  return (
    <>
        <Header />
        <div className="relative h-screen">
            <div
            className={`
                    flex
                    flex-col
                    items-center
                    p-8
                    gap-4
                `}
            >
                <h1 className="text-4xl">Something went wrong</h1>
                <p className="text-gray-500 text-center">
                    <LucideFileX2
                        className="text-red-500 my-10 mx-auto"
                        size={64}
                    />
                    <span 
                        className={`
                            ml-2
                            text-xl
                            block
                        `}
                    >Try again later</span>
                </p>
            </div>
        </div>
        <Footer />
        <Menu />
    </>
  )
}

export default RouteError
