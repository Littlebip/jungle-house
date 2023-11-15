import sun from '../assets/sun.svg';
import water from '../assets/water.svg';
import '../styles/CareScale.css'

function CareScale({scaleValue, careType}) {
  // alternatively can also declare const {scaleValue, careType} = props.value
  // eq to const scaleValue = props.scaleValue and const careType = props.careType
  const range = [1, 2, 3]
  const scaleType = (careType === 'light' ? (
    <img src={sun} alt='sun-icon' className="care-logo" />
  ) : (
    <img src={water} alt='water-icon' className="care-logo" />)
  )
  let careMessage = `This plant requires a ${
    scaleValue === 1 ? 'small' : (scaleValue === 2 ? 'moderate' : 'large')
  } amount of ${careType}`

  // could also have created an object like const quantityLabel = {
    //  1: 'little', 2: 'moderate', 3: 'large'} then call quantityLabel[scaleValue]

  return (
    <div onClick={() => alert(careMessage)} className='care-scale'>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}

export default CareScale
