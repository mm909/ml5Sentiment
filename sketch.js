console.log("sketch.js");
console.log('ml5 version:', ml5.version);
// Create a new Sentiment method
const sentiment = ml5.sentiment('movieReviews', () => {
  console.log("Model Loaded!");
  const prediction = sentiment.predict("rainbow");
  console.log(prediction);
});