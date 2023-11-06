import '../styles/PlantItem.css';
import CareScale from './CareScale';

export default function PlantItem({id, cover, name, light, water, isSpecialOffer, isBestSale, category}) {
  return(
    <li key={id} className='jh-plant-item'>
      <img src={cover} alt={`${name}-cover`} className='jh-plant-item-cover'/>
      {name}
      {isSpecialOffer && <div className="jh-sales">Sale</div>}
      <div>
        <CareScale careType='light' scaleValue={light} />
        <CareScale careType='water' scaleValue={water} />
      </div>
      {(isBestSale || category === 'classic') && <span>🔥</span>}
    </li>
  )
}
