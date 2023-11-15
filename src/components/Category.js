  import { plantList } from "../datas/plantList";
 import '../styles/Category.css'

  export default function Category({chosenCategory, changeCategory}) {
    // empty array is the result format
    // accumulator is the value resulting from the previous call
    // if the category is already present, keep the current array intact, if not, add the new category to it
    const categories = plantList.reduce(
      (accumulator, plant) => accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category),
      []
    )

    return (
      <div className='jh-categories'>
        <select name='category' id='category-select' onChange={(event) => changeCategory(event.target.value)}>
          <option value=''>Choose a category</option>
          {categories.map((category, index) => (
              <option key={`${category}-${index}`} value={category}>{category}</option>
            ))}
        </select>
        <button onClick={() => changeCategory('')}>Display all</button>
      </div>
    )
  }

  // reset button to redisplay all categories (or "all categories")
