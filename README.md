# Redux Connect Standalone
This is High Order Component allows you to use reduxForm when you aren't able to have a single root Provider in your application. Eg: You are migrating a legacy application to React and has a few react components inside this application.

Before using this, you need to configure your redux store and export it, just like below.

```js
import { createStore } from 'redux';
import rootReducer 'path/to/rootReducer';

const store = createStore(rootReducer)
export default store;
```

Then, you can create a file named connect, import the store into it and generate you connect function:

```js
import createReduxForm from 'redux-form-connect-standalone';
import store from 'path/to/youStore'

export const reduxForm = createReduxForm(store);
```

Now, you can use this function the same way you would use [reduxForm function](https://github.com/erikras/redux-form/):

```jsx
import { reduxForm } from 'path/to/yourReduxForm';
import TodoForm from './TodoForm';

export default reduxForm({ ...reduxFormConfig })(TodoForm)
```


### License
MIT
