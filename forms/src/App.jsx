import './App.css'
import { useState , useForm } from 'react-hook-form'
import CompanyList from './CompanyList'


function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [counter, setCounter] = useState(0);
  
  
  // user info
  // const myInfo = {
  //   "personalInfo": {
  //     "firstName": "Jane",
  //     "lastName": "Doe"
  //   },
  //   "contact": {
  //     "email": "jane.doe@email.com"
  //   }
  
  
  
  // };
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>

      <div><p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      </div>

    
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('text', { required: "Name is required" , minLength: { value: 3 , message: "Name must be at least 3 characters" } , maxLength: { value: 100 , message: "Name must be less than 100 characters" } })} placeholder="name" />
      {errors.text && <p style={{ color: 'red' }}>{errors.text.message}</p>}
      <br/>
      <input type="password" {...register('password', {required: "Password is required" })} placeholder="Password"/>
      <br/>
      <input type="submit"/>
      </form>
      {/* {// Perfectly valid JavaScript - just assign it directly


        console.log(myInfo.personalInfo) // Outputs: Jane
        } */}

      <CompanyList />
    </>
  )
}

export default App
