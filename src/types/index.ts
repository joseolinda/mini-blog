type InputProps =   {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type TextAreaProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    maxLength?: number;
    rows?: number;
    cols?: number;
}

type ButtonProps = {
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
}

type PostType = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    author: string;
    authorAvatar?: string;
    likes: number;
    dislikes: number;
    comments: number;
    reposts: number;
    image?: string;
    isLiked?: boolean;
    isDisliked?: boolean;
    isReposted?: boolean;
}

export type {
    InputProps,
    TextAreaProps,
    ButtonProps,
    PostType
}