import { Name } from './Person.types'
type PersonListProps = {
  names: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      { props.names.map((name, index) => {
        return (<li key={index} >{name.first} {name.last}</li>)
      }) } 
    </ul>
  )
}