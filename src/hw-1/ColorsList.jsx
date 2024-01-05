export const ColorsList = ({array}) => {
    return (
        <ul>
            {array.map((color) => <li key={color} style={{
                color: `${color}`
                }} >{color}</li>)}
        </ul>
    )
}