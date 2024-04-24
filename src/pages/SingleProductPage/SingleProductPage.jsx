import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';

export function SingleProductPage() {
    const { id } = useParams();

    const game = store.find(game => game.id == id);

    return (
        <section>
            <div className="card2">
            <h2 className="card__title2">{game.name}</h2>
            <p className="card__des2">{game.body}</p>
            <p className="card__price2">{game.price} ₽</p>
            <img className="card__img2" src={game.img} alt="g" />
            </div>
        </section>
    );
}