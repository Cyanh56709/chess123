import './tile.css'

interface Props{
    number: number;
    image?: string;
    preview: boolean;
}

export default function Tile({number, image, preview}: Props) {
    const className : string = ["tile", number % 2 === 0 ? "black-tile" : "white-tile", preview && "tile-preview"].filter(Boolean).join(' ');

    return (
            <div className={className}>
                {image && <div style ={{ backgroundImage: `url(${image})` }} className="chess-piece"></div>}
            </div>
    );

}