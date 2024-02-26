import Menu from "../components/layout/Menu"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import NewPostForm from "../components/posts/NewPostForm"

function NewPost() {
  return (
    <div
        className={`
            bg-gray-200
            w-full
        `}
    >
        <Header />
        <div className="relative">
            <div
            className={`
                    flex
                    flex-col
                    items-center
                `}
            >
                <NewPostForm />
            </div>
        </div>
        <Footer />
        <Menu />
    </div>
  )
}

export default NewPost
