import '../assets/style/styles.scss'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, getTodo} from "../store/todo/todo.action";
import {CustomInput} from "../component/customInput";


export const AdminPanel = () => {
    const [newValue, setNewValue] = useState()
    const [newLastName, setLastName] = useState()
    const dispatch = useDispatch()

    const { todo } = useSelector( store => ({
        todo: store.todoReducer.todo
    }))

    const handleChange = (e) => {
        setNewValue(e.target.value)
    }

    const handleCreate = () => {
        setNewValue('')
        setLastName('')
        dispatch(addTodo([...todo, {firstName:newValue, lastName:newLastName, id: todo?.length + 1}]))
    }

    useEffect(() => {
        dispatch(getTodo([
            {firstName: 'john', lastName: 'Brown', id: 1},
            {firstName: 'Mark', lastName: 'Cukenberg', id: 2},
            {firstName: 'Stiv', lastName: 'Brown', id: 3}
        ]))
    }, []);

    const clickRedax = () => {
        dispatch(deleteTodo())
    }


    return(
        <>
            <div>
            <CustomInput
                value={newValue}
                onChange={(e) => handleChange(e)}
            />
                {/*<p>{newValue}</p>*/}

                <button onChange={handleCreate}>Add</button>
                {todo?.map((i, j) => (
                    <div style={{display:'flex'}} key={j}>
                        <p>{i?.firstName}</p>
                        <p>{i?.lastName}</p><br/>
                    </div>
                ))}
            </div>
        </>
    )
}