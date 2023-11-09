import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import { PlantItem } from './PlantItem.js';

function ShoppingList ({cart, updateCart}) {
  // empty array is the result format
  // accumulator is the value resulting from the previous call
  // if the category is already present, keep the current array intact, if not, add the new category to it
  const categories = plantList.reduce(
    (accumulator, plant) => accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
    []
  )

  // add to cart function: check if the item is already present in the cart
  // if it is, separate it to update its amount, if not create it
  // render a new array of items with the other items and the new item
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const currentFilteredPlantArray = cart.filter((plant) => plant.name !== name)
      updateCart([...currentFilteredPlantArray, {name, price, amount: currentPlantSaved.amount + 1}])
    } else {
      updateCart([...cart, {name, price, amount: 1}])
    }
  }

  return (
    <div className='jh-shopping-list'>
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
        {plantList.map(({id, cover, name, light, water, isSpecialOffer, isBestSale, category, price}) => (
          <div>
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
              isSpecialOffer={isSpecialOffer}
              isBestSale={isBestSale}
              category={category}
            />
            <button onClick={() => addToCart(name, price)}>Add</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;
