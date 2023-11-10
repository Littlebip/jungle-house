import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import { PlantItem } from './PlantItem.js';

function ShoppingList ({cart, updateCart, chosenCategory, changeCategory}) {
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

  const currentCategoryItems = (chosenCategory === '') ? plantList : (plantList.filter((plant) => plant.category === chosenCategory));

  return (



    <div className='jh-shopping-list'>
      <ul className='jh-plant-list'>
        {currentCategoryItems.map(({id, cover, name, light, water, isSpecialOffer, isBestSale, category, price}) => (
          <div key={id}>
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
