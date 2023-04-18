import './styles/Title.css'

type TitleProps = {
    title: string
    desc: string
}

export default function Title({title, desc}: TitleProps){
    return(
        <>
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </>
    )
}