type Props = {
    children: React.ReactNode;
};

export const UserList = ({ children }: Props) => {
    return (
        <section className="grid grid-cols-3 gap-4">
            {children}
        </section>
    )
}