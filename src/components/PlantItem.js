import '../styles/PlantItem.css';
import CareScale from './CareScale';

function handleClick(plantName) {
  alert(`Want to buy this ${plantName}?`)
}

function PlantItem({id, cover, name, light, water, isSpecialOffer, isBestSale, category, price}) {
  return(
    <li key={id} className='jh-plant-item' onClick={() => handleClick(name)}>
      <img src={cover} alt={`${name}-cover`} className='jh-plant-item-cover'/>
      {name}
      {isSpecialOffer && <div className="jh-sales">Sale</div>}
      <div className='jh-plant-item-price'>{price}€</div>
      <div>
        <CareScale careType='light' scaleValue={light} />
        <CareScale careType='water' scaleValue={water} />
      </div>
      {(isBestSale || category === 'classic') && <span>🔥</span>}
    </li>
  )
}

export {PlantItem}
