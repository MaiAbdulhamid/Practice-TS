import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/Restriction/RandomNumber';
import { Toast } from './components/TemplateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { Text } from './components/Polymorphic/Text'

function App() {
  const personName = {
    first: 'Mai',
    last: 'Werk'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Mai' isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading'/>
      <Heading> Placeholder Text </Heading>
      <Oscar>
        <Heading>Oscar Goes To Leonardo Dicaprio</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log('Button Clicked', event, id)} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{border: '1px solid #eee', padding: '1rem'}} />
      <Counter />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Private isLoggedIn={true} component={Profile} />

      {/* Generic Props */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />

      {/* Restricting Props */}
      <RandomNumber value={10} isPositive />

      {/* Template Literals and Exclude */}
      <Toast position='center' />

      {/* Wrapping HTML Elements */}
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}> 
        Primary Button
      </CustomButton>
      
      {/*  */}
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>

    </div>
  );
}

export default App;
