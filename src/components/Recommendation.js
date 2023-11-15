function Recommendation() {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 3 && currentMonth < 5;
  return <div className="recommendation">{isSpring ? <div>It's time to repot! 🪴</div> : <div>Spring'll be there soon!</div>}</div>;
}

export default Recommendation
