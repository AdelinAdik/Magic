import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import './Catalog.css';

export function Catalog() {
    return (
        <>
            <h1 className="main-title">Каталог</h1>
            <div className="prods">
            {
              
                store.map(game => (
                    
                    <div className="card">
                    <article key={game.id}>
                        <h2 className="card__title" >{game.name}</h2>
                        <p className="card__des">{game.body}</p>
                        <p className="card__price">{game.price} ₽</p>
                        
                        <img className="card__img" src={game.img} alt="q" />
                      
                        <div className="card__id">
                        <Link to={`/catalog/${game.id}`}>Перейти</Link>
                        </div>
                    </article>
                    
                 </div>
                 
                  
                   
                ))
            }
            </div>
        </>
    );
}