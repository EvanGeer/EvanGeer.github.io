export function HeadShot({ size, className="" }: { size: number, className?:string }) {
  return <img
    className={className}
    src="https://avatars.githubusercontent.com/u/49009980?v=4"
    width={size}
    style={{objectFit:"contain"}}
    alt="Head Shot" />;
}
