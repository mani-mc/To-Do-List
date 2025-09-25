
export default function TaskInput({ newList, setNewList, edit, handleAddorUpdate }) {

    const handleChange = (e) => {
        setNewList(e.target.value)
    }

    return (
        <>
            <div className="task-input-container">
                <input className="task-input" value={newList} onChange={handleChange} type="text" placeholder='Enter Your Task . . . . .' />
                <button className="task-btn" onClick={handleAddorUpdate}>
                    {edit !== null ? "Update" : "Add Task"}</button>
            </div>
        </>
    )
}
