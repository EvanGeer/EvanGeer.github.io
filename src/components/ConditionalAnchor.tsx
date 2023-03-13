

export default function ConditionalAnchor({href, children, predicate}: {href: string, children?: JSX.Element[] | JSX.Element | string, predicate: () => boolean}) {
    return (
        <>
        {
            predicate() 
            ? <a href={href}>
                {children}
            </a>
            : children
        }
        </>
    )
}