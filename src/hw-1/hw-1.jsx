import { ColorsList } from "./ColorsList"

export const Homework1 = ({
    name, 
    url, 
    alt, 
    website, 
    firstNum, 
    secondNum, 
    colors
}) => {
    return (
        <>
            <h1>{name}</h1>
            <p>Ласкаво просимо до нашого сайту!</p>
            <img src={url} alt={alt} />
            <a target="_blank" href={website.link}>{website.name}</a>
            <p>Result: {firstNum + secondNum}</p>
            <ColorsList array={colors}></ColorsList>
        </>
    )
}