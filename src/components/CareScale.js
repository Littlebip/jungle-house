import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale({scaleValue, careType}) {
  // alternatively can also declare const {scaleValue, careType} = props.value
  // eq to const scaleValue = props.scaleValue and const careType = props.careType
  const range = [1, 2, 3]
  const scaleType = (careType === 'light' ?
    <img src={sun} alt='sun-icon' />
    : <img src={water} alt='water-icon' />)

  return (
    <div>
      {range.map((rangeElement) => scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
      )}
    </div>
  )
}

export default CareScale
