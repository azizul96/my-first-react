export default function Actor({actor}){
    const {id, name, age} = actor
    return (
        <div>
            <h2>Actor: {name}</h2>
            <h2>age: {age}</h2>
            <h2>ID: {id}</h2>
        </div>
    )

}