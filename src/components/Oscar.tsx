type OscarProps = {
  children: React.ReactNode
}
/**
** React.ReactNode
** This type is from Types react's package
** This is the type of react component
**/

export const Oscar = (props: OscarProps) => {
  return <h2>{props.children}</h2>
}