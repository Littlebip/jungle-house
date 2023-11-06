function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 3 && currentMonth < 5;
  return isSpring ? <div>It's time to repot! 🪴</div> : <div>Spring'll be there soon!</div>;
}

export default Recommendation
