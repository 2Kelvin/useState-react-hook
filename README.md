# useState-react-hook

![amara](https://github.com/2Kelvin/useState-react-hook/assets/85868026/647b3a5d-f253-46f8-9286-af30a3e379b7)

## Notes

State is a way for telling a component to remember something.

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

You can also initalize state variables using arrays and objects.
