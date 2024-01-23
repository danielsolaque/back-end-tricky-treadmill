/**
 * Brand schema
 *
 * {
 *      brand_id: number,
 *      title: string,
 *      isTop: boolean,
 * }
 */

///Handle this like a component in your FrontEnd
// const categories = ["noise", "resistance issues", "handlebar instability"];

// <select>
//   {categories.map(category){
//     return (<option value="category">category</option>);
//   }}
// </select>


const brands = [
  {
    brand_id: 1,
    title: "CYBEX",
    isTop: true,
  },
  {
    brand_id: 2,
    title: "Hammer Strength",
    isTop: true,
  },
  {
    brand_id: 3,
    title: "Life Fitness",
    isTop: true,
  },
  {
    brand_id: 4,
    title: "Matrix",
    isTop: true,
  },
  {
    brand_id: 5,
    title: "Nautilus",
    isTop: true,
  },
  {
    brand_id: 6,
    title: "Precor",
    isTop: true,
  },
  {
    brand_id: 7,
    title: "StarTrac",
    isTop: true,
  },
  {
    brand_id: 8,
    title: "BH",
    isTop: false,
  },
  {
    brand_id: 9,
    title: "NordicTrack",
    isTop: false,
  },
  {
    brand_id: 10,
    title: "Peloton",
    isTop: false,
  },
];


const models = [
  {
    brand_id: 10,
    model_id: 1,
    title: "Bike+",
  },
  {
    brand_id: 10,
    model_id: 2,
    title: "Bike Basic",
  },
  { 
    brand_id: 7,
    model_id: 3,
    title: "Startrac 800",
  },
  {
    brand_id: 7,
    model_id: 4,
    title: "Startrac 3000",
  },
  {
    brand_id: 1,
    model_id: 5,
    title: "Cybex 700A",
  },
  { 
    brand_id: 1,
    model_id: 6,
    title: "Cybex 800A",
  },
  { 
    brand_id: 1,
    model_id: 7,
    title: "Cybex 800A",
  }
];

// SELECT * FROM reviews WHERE category = 'noise';

const reviews = [
  {
    review_id: 1,
    problem_title: "Louder noises",
    name: "Jordan",
    category_id: 2,
    model_id: 2,
    brand_id: 10,
    problem_description: "Treadmill is making noises once I start running",
    problem_solution:
      "Normally this is due to a worn drive belt, is highly recommended to change it",
  },
  {
    review_id: 2,
    problem_title: "Display malfunction",
    name: "Emily",
    category_id: 2,
    model_id: 5,
    brand_id: 7,
    problem_description:
      "The display screen is not showing accurate information",
    problem_solution:
      "Try resetting the treadmill and if the issue persists, contact customer support.",
  },
  {
    review_id: 3,
    problem_title: "Uneven belt movement",
    name: "Alex",
    category_id: 4,
    model_id: 1,
    brand_id: 12,
    problem_description: "The treadmill belt is moving unevenly during use",
    problem_solution:
      "Check if the treadmill belt is properly aligned and adjust it if necessary. Also, ensure proper lubrication.",
  },
  {
    review_id: 4,
    problem_title: "Resistance issues",
    name: "Chris",
    category_id: 1,
    model_id: 3,
    brand_id: 8,
    problem_description:
      "The resistance on the elliptical machine is not working properly",
    problem_solution:
      "Inspect the resistance mechanism and cables. Lubricate if necessary or seek professional assistance.",
  },
  {
    review_id: 5,
    problem_title: "Handlebar instability",
    name: "Olivia",
    category_id: 4,
    model_id: 4,
    brand_id: 9,
    problem_description:
      "The handlebars on the exercise bike feel unstable during use",
    problem_solution:
      "Tighten all screws and bolts on the handlebars. If the issue persists, check for any damage or wear.",
  },
  {
    review_id: 6,
    problem_title: "Console not powering on",
    name: "Dylan",
    category_id: 2,
    model_id: 6,
    brand_id: 11,
    problem_description: "The console of the stationary bike is not turning on",
    problem_solution:
      "Check the power source and cables. If the problem persists, contact the manufacturer for technical support.",
  },
  {
    review_id: 7,
    problem_title: "Pedal misalignment",
    name: "Sophia",
    category_id: 5,
    model_id: 2,
    brand_id: 10,
    problem_description: "The pedals on the elliptical machine are misaligned",
    problem_solution:
      "Adjust the pedal alignment and check for any loose connections. Tighten as needed for a smooth operation.",
  },
  {
    review_id: 8,
    problem_title: "Inaccurate heart rate readings",
    name: "Ethan",
    category_id: 1,
    model_id: 4,
    brand_id: 9,
    problem_description:
      "The heart rate monitor on the fitness tracker is providing inaccurate readings",
    problem_solution:
      "Ensure proper placement of the tracker and clean the sensors. If issues persist, contact customer support.",
  },
];



const categories = [
  {
    category_id: 1,
    category_name: "noises",
  },
  {
    category_id: 2,
    category_name: "malfunction",
  },
  {
    category_id: 3,
    category_name: "uneven movement",
  },
  {
    category_id: 4,
    category_name: "resistance issues",
  },
  {
    category_id: 5,
    category_name: "handlebar instability",
  },
  {
    category_id: 6,
    category_name: "display issues",
  },
  {
    category_id: 7,
    category_name: "pedal alignment",
  },
  {
    category_id: 8,
    category_name: "heart rate monitor",
  },
  {
    category_id: 9,
    category_name: "noises",
  },
  {
    category_id: 10,
    category_name: "malfunction",
  },
  {
    category_id: 11,
    category_name: "uneven movement",
  },
  {
    category_id: 12,
    category_name: "resistance issues",
  },
  {
    category_id: 13,
    category_name: "handlebar instability",
  },
  {
    category_id: 14,
    category_name: "display issues",
  },
  {
    category_id: 15,
    category_name: "pedal alignment",
  },
  {
    category_id: 16,
    category_name: "heart rate monitor",
  },
];


module.exports = {
  brands,
  models,
  reviews,
  categories,
};
