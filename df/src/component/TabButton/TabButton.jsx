export default function Tab ({children,handleClick}) {
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}