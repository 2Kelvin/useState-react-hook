# useState-react-hook

![amara](https://github.com/2Kelvin/useState-react-hook/assets/85868026/647b3a5d-f253-46f8-9286-af30a3e379b7)

## Notes

`State is a way of telling a component to remember something between renders`.

UseState allows 2 major things:

- [x] Through the `state variable`, changes persist through renders. That is, unlike normal variables which when the component is rerendered loose all the updates and rerenders from scratch, state variable remembers it's last values even when the component is rerendered. State variables have memory even through renders i.e `state variables retain data even through renders`. A local /normal variable never retains state/memory so the component will not be rerendered with the new changes but will be rerendered afresh from the start.

- [x] Through the state's `setter function`, when a state variable is changed setState function triggeres the component to be rerendered with the new changes. This is unlike regular functions where if a local variable is changed, there's no function to force the component to rerender with the new changes. `state setter function triggers a rerender whenever state changes`

### How to use useState

1. At the top of the file, import useState from react
   ```javascript
   import { useState } from "react";
   ```
2. Intialize state variable and setter function

   ```javascript
   const [followers, setFollowers] = useState(300);
   ```

   Followers is the state variable, setFollowers is the setter function. variable followers keeps track of the number of followers in the app, it can be updated uding setFollowers setter function. When this change happens, a rerender of the component containing followers state variable happens with the updated followers count.

   This (**const [followers, setFollowers] = useState(300)**) is called `array destructuring`. _UseState returns an array of exactly two items: a variable & a function_. The state variable on the left is assigned to the state variable returned by useState & the setter function on the left is assigned to the setter function returned by useState. The value assigned to useState is the initial value of the state variable. In our example the followers state variable has the initial value of 300.

### Updating a state variable

- Updating a number state variable

  ```javascript
  const [followers, setFollowers] = useState(300);

  // increasing the follower count by 1
  setFollowers(followers + 1);

  // updating the followers to 1200
  setFollowers(1200);
  ```

- Updating a string state variable

  ```javascript
  const [status, setStatus] = useState("");

  // updating the status to pending
  setStatus("pending...");
  ```

- Updating a boolean state variable

  ```javascript
  const [isChecked, setIsChecked] = useState(false);

  // updating isChecked to true
  setIsChecked(true);
  ```

You can also initalize state variables using [objects](https://github.com/2Kelvin/useState-react-hook?tab=readme-ov-file#updating-objects-in-state) and [arrays](https://github.com/2Kelvin/useState-react-hook?tab=readme-ov-file#updating-arrays-in-state). Arrays & objects are mutable in JavaScript, but once you use them as state objects, you need to avoid mutating them directly to change state. Create a new copy or new array /object to change the state. Remember state should be immutable.

`State is isolated and private (independent)` i.e. if you render the same component twice or more, each instance of the component carries with it it's own state; their states are not linked or shared at all. Changing one component's instance doesn't affect the other instances of the same component at all.

## Updating objects in state

Objects are mutable. An object can be assigned to useState's state variable. However, `the setter function should update using a copy of the object or make a new object; it should NEVER mutate the original object stored in the state variable`. Treat the object assigned to state as **read-only**.

Example of declaring and updating an object in state:

```javascript
const [user, setUser] = useState({ name: "July", gender: "F" });

// updating state object by replacing it WHOLE (all of it's properties)
setUser({ name: "Hunt", gender: "M" });

// partially updating state object (only some of the properties)
// using the spread (...) syntax
setUser({ ...user, name: "Derek" });
```

The example below is okay because it's changing ALL the object's properties. If it was only changing one or some of the object properties, that would be wrong since that's mutating the original object. To change some of the object properties and not all and still use it correctly to update state, use the **spread syntax**.

```javascript
// updating state object by replacing it WHOLE (all of it's properties)
// this creates a new object entirely since it changes all the object properties
setUser({ name: "Hunt", gender: "M" });

// it's the same code as this
const hunt = { name: "Hunt", gender: "M" };
setUser(hunt);
```

**_The spread syntax(...) is shallow, it only copies an object one level deep. To copy a nested property, you need to use it (...) again in the next nested level_**.

Example of `copying a deeply nested object and using it to update state` using the setter function:

```javascript
const [pc, setPc] = useState({
  brand: "Dell",
  color: "black",
  specs: {
    ram: "8GB",
    cpu: "i5 12400",
    gpu: "RTX 2070 Super",
  },
});

// setting state with a copy object with an updated gpu property
setPc({
  ...pc,
  specs: {
    ...pc.specs,
    gpu: "RX 6800XT",
  },
});
```

❌ Example of wrongly mutating state. This mutation is bad for 2 reasons:

- It involves mutating the original state object which is not recommended. To fix this create a copy of the original object with the new changes or create an entirely new object.
- It doesn't trigger a rerender. React doesn't know that the object has been upddated. To fix this, use the setter function and pass a copy / new object to it to trigger a rerender.

```javascript
const [user, setUser] = useState({ name: "Leo", age: 32 });

function handleNameChange() {
  // mutating the state object
  // this is wrong because: involves mutation + doesn't trigger a rerender
  user.age = 53;
}
```

## Updating arrays in state

Arrays are mutable. However, `arrays assigned to state variable should be treated as immutable`. Just like we did with objects above. To update an array state variable, create a copy of the original array or create a new array to pass to the setter function. **Array state variables are read-only**.

- **Adding to a state array**

✅ Example of the right way to declare and update an array in state:

```javascript
const [players, setPlayers] = useState([]);

// update & set state using the spread syntax (...) which copies the original array
// and adding a new item to the array at the end
setPlayers([
  ...players,
  { name: "Steph Curry", position: "Point Guard", jerseyNo: 30 },
]);

// adding an item at the start of the array
setPlayers([
  { name: "Kawhi Leonard", position: "Small Forward", jerseyNo: 2 },
  ...players,
]);
```

❌ Example of the wrong way to declare and update an array in state.

```javascript
const [players, setPlayers] = useState([]);

// wrong for 2 reasons:
// 1. push mutates the original array which is bad
// 2. doesn't trigger a rerender since react doesn't know that the array was changed
artists.push({ id: nextId++, name: name });
```

- **Removing from a state array**

Use `filter() to remove item(s) from an array without mutating the original array`. It returns a new copy of the array with the unwanted items removed.

```javascript
const [powerForwards, setPowerForwards] = useState([
  { id: 0, name: "Tim Duncan", position: "PF" },
  { id: 1, name: "Dirk Nowitzki", position: "PF" },
  { id: 2, name: "Karl Malone", position: "PF" },
  { id: 3, name: "Michael Jordan", position: "SG" },
]);

// removing any player who doesn't play power forward
// returns a new array of all players that pass the filter condition test
setPowerForwards(powerForwards.filter((player) => player.position == "PF"));
```
