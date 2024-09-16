type Props = {
    variant: "blue" | "destructive";
    children: string | React.ReactNode;
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const variants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white transition-all hover:scale-110 duration-300",
    destructive: "bg-red-600 hover:bg-red-500 text-white transition-all hover:scale-110 duration-300"
}

export const Button = ({ children, variant, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-md ${variants[variant]}`}>{children}</button>
    )
}