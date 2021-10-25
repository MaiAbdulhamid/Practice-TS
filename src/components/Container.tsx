type ContainerProps = {
  styles: React.CSSProperties
  children?: React.ReactNode 
}
export const Container = (props: ContainerProps) => {

  return (
    <div style={props.styles}>
      Some Text
      {props.children}
    </div>
  )
}