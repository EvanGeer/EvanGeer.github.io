export function CleanLink({ href }: { href: string; }) {
  return (
    <>
      {href ? (
        <a className="text-wrap" href={href} target="newtab">
          {href
            ?.replace("http://", "")
            ?.replace("https://", "")
            ?.replace("www.", "")}
        </a>
      ) : (
        <i className="text-wrap opacity-25">not available</i>
      )}
    </>
  );
}
