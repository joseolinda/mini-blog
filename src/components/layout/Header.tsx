import { LucideSearch } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { Form } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-gray-800 w-full">
            <header
                className={`
                    flex 
                    items-center 
                    h-16  
                    text-white
                    justify-between
                    px-4
                    max-w-7xl
                    mx-auto
                `}
            >
                    <FaReact size={32} />
                    <h1>MiniBlog - React</h1>
                    <Form action="/search" method="get" className="relative">
                        <input
                            type="search"
                            name="q"
                            placeholder="Pesquisar..."
                            className={`
                                w-full
                                max-w-32
                                mx-2
                                px-2
                                py-2
                                rounded-sm
                                border-0
                                focus:outline-none
                                focus:ring-0
                                bg-gray-600
                                text-white
                                focus:max-w-64
                                transition-all
                                duration-300
                            `}
                        />
                        <button
                            type="submit"
                            className={`
                                absolute
                                h-full 
                                bg-gray-900 
                                text-white
                                bg-transparent
                                right-4
                            `}
                        >
                            <LucideSearch size={16} />
                        </button>
                    </Form>      
            </header>
        </div>
    );
}

export default Header;