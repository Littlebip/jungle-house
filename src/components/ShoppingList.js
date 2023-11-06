import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList () {
  // empty array is the result format
  // accumulator is the value resulting from the previous call
  // if the category is already present, keep the current array intact, if not, add the new category to it
  const categories = plantList.reduce(
    (accumulator, plant) => accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
    []
  )

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>{category}</li>
        ))}
      </ul>
      <ul className='jh-plant-list'>
        {/* {plantList.map((plant) => (
          <li className='jh-plant-item' key={`${plant.id}`}>
            {plant.name}
            {(plant.isBestSale || plant.category === 'classic') && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="jh-sales">Sale</div>}
          </li>
      ))} */}
        {plantList.map(({id, cover, name, light, water, isSpecialOffer, isBestSale, category}) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
            isSpecialOffer={isSpecialOffer}
            isBestSale={isBestSale}
            category={category}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;
