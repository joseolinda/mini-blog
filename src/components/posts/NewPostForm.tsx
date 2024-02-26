import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import { LucideSend, LucideUndoDot } from 'lucide-react';
import { Link } from 'react-router-dom';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <div
        className={`
          w-full
          bg-white 
          border 
          border-gray-200 
          rounded-sm 
          p-8
        `}
    >
      <div className="max-w-2xl mx-auto">
        <h1
          className={`
            text-xl
            font-semibold
            text-zinc-600
            text-center
            mb-4
          `}
        >
          Crie um novo post
        </h1>
        <form
            className={`
                flex
                flex-col
                gap-4
                mx-auto
            `}
            onSubmit={handleSubmit}
        >
            <Input label="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextArea 
              label="Conteúdo" 
              value={content} 
              onChange={(e) => setContent(e.target.value)}
              maxLength={280}
              rows={6}
            />
            <fieldset className="flex gap-4">
              <Button 
                variant="secondary" 
                type="button" 
                onClick={() => {}}
              >
                <Link to="/" className="flex justify-between">
                  <LucideUndoDot className='mr-4' />
                  Cancelar
                </Link>
              </Button>
              <Button 
                variant="primary" 
                type="submit" 
                onClick={() => {}}
                icon={ <LucideSend /> }
              >Criar</Button>
            </fieldset>
        </form>
      </div>
    </div>
  );
}

export default NewPostForm;