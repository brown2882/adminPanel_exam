import '../assets/style/styles.scss'
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, getTodo} from "../store/todo/todo.action";
import {CustomInput} from "../component/customInput";
import {useNavigate} from "react-router";


export function AdminPanel() {
    const [newValue, setNewValue] = useState('')
    const [newLastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const [age, setAge] = useState('')
    const dispatch = useDispatch()
    const { todo } = useSelector( store => ({
        todo: store.todoReducer.todo
    }))
    const clickRedax = useCallback( (e) => {
        const a = todo.filter((user) => user.id !== +e.target.id);
        dispatch(getTodo(a))
    },[todo,dispatch])

    const handleCreate = useCallback((e)=>{
        e.preventDefault()
        console.log(newValue,newLastName,555555555)
        if (newValue && newLastName && age && mail){
            dispatch(addTodo([...todo, {firstName:newValue, lastName:newLastName,mail:mail, age:age, id: todo?.length + 1}]))
            setNewValue('')
            setAge('')
            setMail('')
            setLastName('')
        }
        else {
            alert('error,please fill in input')
        }
    },[todo,newValue,newLastName,age,mail])

    useEffect(() => {
        dispatch(getTodo([
            {firstName: 'john', lastName: 'Brown', mail:'bron@gmail.com', age:23, id: 1},
            {firstName: 'Mark', lastName: 'Berg', mail:'mark@gmail.com', age:42, id: 2},
            {firstName: 'Stiv', lastName: 'Brown',  mail:'stiv@gmail.com', age:58, id: 3}
        ]))
    }, []);


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
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.mail}</td>
                        <td>{i.age}</td>
                        <input type={"checkbox"}/>
                        <button id={i.id} onClick={clickRedax} style={{backgroundColor:'red',color:'white',padding:2,marginLeft:3}}>Delete</button>
                        <button onClick={userDet} style={{backgroundColor:'blue',color:'white',padding:2,marginLeft:3}}>User details</button>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={'input'}>
                <CustomInput
                    value={newValue}
                    onChange={(e) =>  setNewValue(e.target.value)}

                />
                <CustomInput
                    value={newLastName}
                    onChange={(e) =>  setLastName(e.target.value)}
                />
                <CustomInput
                    value={mail}
                    onChange={(e) =>  setMail(e.target.value)}
                />
                <CustomInput
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button onClick={handleCreate}>Add</button>

            </div>
        </div>
    )
}
