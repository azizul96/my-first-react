export default function Todo ({task , isDone}){
    return (
        
        <li className="font-bold text-red-500 ">Task: {task} - {isDone ? "Finished" : "Do It"}</li>
    )
}