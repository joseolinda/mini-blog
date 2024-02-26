import { LucideMessageCircleMore, LucideSave } from "lucide-react"
import { useState } from "react"

function CommentForm({
  postId,
  setComments,
}: {
  postId: number
  setComments: (arg: number) => number
}) {
  const [value, setValue] = useState("")
  const [showCommentBox, setShowCommentBox] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value.length) {
          setComments(prev => prev + 1)
          setValue("")
          setShowCommentBox(false)
        }
      }}
      className="space-y-4 relative w-full"
    >
      <button
        type="submit"
        className="absolute z-10 right-0 -top-12 flex gap-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowCommentBox(!showCommentBox)}
      >
        { showCommentBox ? (
            <>
                <LucideSave size={24} />
                Salvar
            </>
        ) : (
            <>
                <LucideMessageCircleMore size={24} />
                Comentar
            </>
        )}
      </button>
      {showCommentBox ? (
        <fieldset className="block relative">
            <textarea
            id={`${postId}`}
            className={`
                    block 
                    rounded-md
                    p-2.5
                    pt-6
                    w-full
                    bg-gray-700
                    text-gray-100 
                    border-1 
                    border-gray-300 
                    appearance-none 
                    focus:outline-none 
                    focus:ring-0 
                    focus:border-blue-600 
                    peer
                `}
            placeholder=""
            maxLength={144}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <label
            htmlFor={`${postId}`}
            className={`
                    absolute
                    text-gray-500 
                    duration-300 
                    transform 
                    -translate-y-4 
                    scale-75 
                    top-4 
                    z-10 
                    origin-[0] 
                    start-2.5 
                    peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 
                    peer-focus:-translate-y-4
                `}
            >
            Commente algo sobre o post.
            </label>
            {value.length ? (
            <span
                className={`
                    absolute
                    text-gray-500 
                    text-sm 
                    bottom-2 
                    right-2
                    ${value.length > 144 - 1 ? "text-red-500" : "text-gray-500"}
                    `}
            >
                {value.length}/{144}
            </span>
            ) : (
            ""
            )}
        </fieldset>
        ) : ""}
    </form>
  )
}

export default CommentForm
