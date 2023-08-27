import '../assets/style/styles.scss'
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, getTodo} from "../store/todo/todo.action";
import {CustomInput} from "../component/customInput";
import {useNavigate} from "react-router";


export const AdminPanel = () => {
    const [newValue, setNewValue] = useState()
    const [newLastName, setLastName] = useState()
    const [mail, setMail] = useState()
    const [age, setAge] = useState()
    const dispatch = useDispatch()
    const { todo } = useSelector( store => ({
        todo: store.todoReducer.todo
    }))

    const handleChange = (e) => {
        setNewValue(e.target.value)
    }
    const handleChangee = (e) => {
        setLastName(e.target.value)
    }
    const handleChangeee = (e) => {
        setMail(e.target.value)
    }
    const handleChangAge = (e) => {
        setAge(e.target.value)
    }
    const handleCreate = useCallback(() => {
        if(newValue && newLastName && age && mail){
            setNewValue('')
            setLastName('')
            setMail('')
            setAge('')
            dispatch(addTodo([...todo, {firstName:newValue, lastName:newLastName,mail:mail, age:age, id: todo?.length + 1}]))
        } else {
            alert('error,please fill in input')
        }
    }, [todo])

    useEffect(() => {
        dispatch(getTodo([
            {firstName: 'john', lastName: 'Brown', mail:'bron@gmail.com', age:23, id: 1},
            {firstName: 'Mark', lastName: 'Berg', mail:'mark@gmail.com', age:42, id: 2},
            {firstName: 'Stiv', lastName: 'Brown',  mail:'stiv@gmail.com', age:58, id: 3}
        ]))
    }, []);

    const clickRedax = () => {
        dispatch(deleteTodo((id) => {
            getTodo((todo => todo.filter((user) => user.id !== id)));
        }))
    }
    const navigate = useNavigate()
    const userDet = () => {
        navigate('/userdetails')
    }
    return(
        <div className={'panel'}>
            <h1 style={{paddingLeft:655,paddingTop:45}}>Admin Panel</h1>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {todo?.map((i, j) => (
                    <tr  key={j}>
                        <td>{i?.firstName}</td>
                        <td>{i?.lastName}</td>
                        <td>{i.mail}</td>
                        <td>{i.age}</td>
                        <input type={"checkbox"}/>
                        <button onClick={clickRedax} style={{backgroundColor:'red',color:'white',padding:2,marginLeft:3}}>Delete</button>
                        <button onClick={userDet} style={{backgroundColor:'blue',color:'white',padding:2,marginLeft:3}}>User details</button>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={'input'}>
            <CustomInput
                value={newValue}
                onChange={(e) => handleChange(e)}

            />
            <CustomInput
                value={newLastName}
                onChange={(e) => handleChangee(e)}
            />
            <CustomInput
                value={mail}
                onChange={(e) => handleChangeee(e)}
            />
            <CustomInput
                value={age}
                onChange={(e) => handleChangAge(e)}
            />

                <button onClick={handleCreate}>Add</button>

            </div>
        </div>
    )
}