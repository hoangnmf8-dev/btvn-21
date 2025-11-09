//Bài 1
console.log("Bài 1:");
const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

users.forEach((user) => console.log(user.name));

const sortUsers = users.slice(0).sort((a, b) => b.age - a.age); //Không làm thay đổi mảng gốc
console.log(sortUsers[0]);

let avarageAge = +(
  users.reduce((acc, user) => (acc += user.age), 0) / users.length
).toFixed(2);
console.log("🚀 ~ avarageAge:", avarageAge);
console.log("===============================================");

//Bài 2
console.log("Bài 2:");
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];

const productsName = products.map((item) => item.name);
console.log("🚀 ~ productsName:", productsName);

let totalPrice = products.reduce((acc, product) => (acc += product.price), 0);
console.log("🚀 ~ totalPrice:", totalPrice);

const filterProducts = products.filter((product) => product.price > 1000000);
console.log("🚀 ~ filterProducts:", filterProducts);
console.log("===============================================");

//Bài 3
console.log("Bài 3:");
const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

function calcAvarageScore(student) {
  return +(
    student.scores.reduce((acc, score) => (acc += score)) /
    student.scores.length
  ).toFixed(2);
}

const avarageScore = students.map((student) => {
  return {
    ...student,
    avarage_score: calcAvarageScore(student),
  };
});
console.log("🚀 ~ avarageScore:", avarageScore);

const goodStudent = students.filter(
  (student) => calcAvarageScore(student) >= 8
);
console.log("🚀 ~ goodStudent:", goodStudent);

students.sort((a, b) => calcAvarageScore(b) - calcAvarageScore(a));
console.log("🚀 ~ students:", students);
console.log("===============================================");

//Bài 4
console.log("Bài 4:");
const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "An", text: "Dễ hiểu!" },
      { user: "An", text: "Súc tích!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [
      { user: "Chi", text: "Cảm ơn chia sẻ" },
      { user: "An", text: "Tuyệt vời!" },
    ],
  },
  {
    id: 3,
    title: "NodeJs",
    tags: ["nodejs"],
    comments: [{ user: "An", text: "Rất cần thiết!" }],
  },
];

posts.forEach((post) => {
  let str = `The post "${post.title}" has ${post.comments.length} `;
  post.comments.length > 1 ? (str += "comments") : (str += "comment");
  console.log(str);
});

const tagsArr = [...new Set(posts.flatMap((post) => post.tags))];
console.log("🚀 ~ tagsArr:", tagsArr);

const filterComments = posts.flatMap((post) =>
  post.comments.filter((item) => item.user === "An").map((item) => item.text)
);
console.log("🚀 ~ filterComments:", filterComments);
