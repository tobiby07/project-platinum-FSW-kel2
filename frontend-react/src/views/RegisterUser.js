import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const createUsers = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/api/users", {
            name,
            email,
            password,
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };

      return(
        <>
            <form onSubmit={createUsers}>
                <label> Nama </label>
                    <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Name' 
                    />
                <label> Email </label>
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='abc@gmail.com' 
                    />
                <label> Password </label>
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password' 
                    />
                <button type='submit'>Save</button>
            </form>

        </>
      )
}

export default CreateUser