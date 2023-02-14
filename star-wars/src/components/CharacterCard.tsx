interface CharacterCardProps {
    name: string;
    image: string;
}

export function CharacterCard({name, image}: CharacterCardProps){
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={image} alt="imagem do personagem" className="rounded-t w-44 h-56"/>
            <span className="bg-zinc-900 text-zinc-400 w-full text-center text-lg rounded-b">{name}</span>
        </div>
    )
}