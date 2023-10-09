<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The answer is B because there is a typographical error in the variable name; it should be greeting, not greetign, which leads to a ReferenceError when trying to access an undefined variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In JavaScript, when we use the + operator with a string and a number, it performs string concatenation. So, in this case, 1 is treated as a number, and "2" is treated as a string, and they are concatenated together to form "12".
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The food array is not modified by changing the info.favoriteFood property because the assignment info.favoriteFood = "🍝" only updates the favoriteFood property of the info object, and it does not affect the original food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the sayHi function, there is a parameter name, but when we call sayHi() without passing any arguments, name is undefined. Therefore, the template string includes "Hi there, " followed by the value of name, which is undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the forEach loop, it iterates over the nums array and checks each num for truthiness. All elements in the array, except for 0, are truthy in JavaScript. So, for each truthy element, the count is incremented by 1. Since there are three truthy elements in the array (1, 2, and 3), the count will be 3.</i>

</p>
</details>



* Five Features of My Website

* Homepage (Home Component): The Home component is likely the homepage of my website. It displays content fetched from "/events.json" using the fetch function, suggesting a dynamic and data-driven homepage.

* Authentication (Login and Register Components): My website have user authentication features, as it includes routes for the login and registration pages ('/login' and '/register'). Users can likely create accounts and log in.

* Protected Routes (PrivateRoute Component): Some routes, such as '/about' and '/contact', are wrapped with the PrivateRoute component. This indicates that certain sections of my website are protected and only accessible to authenticated users.

* Individual Card View (Card Component): The Card component is used to display a specific card's details, as it is associated with the '/cards/:id' route. This suggests that my  website allows users to view detailed information about individual cards or items.

* Error Handling (Error Component): The Error component is specified as the errorElement for the root route. This indicates that my website has error handling in place to display an error page (Error component) when there are issues or when an undefined route is accessed.



