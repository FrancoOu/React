# React
### This repository is just for the process of me self-learning React.
### Including some demo for basics and some real practices of building components using React.
***Wish I could have a pleasant journey of learning React :)***

#### Before 1/12/2022

1. some basic concept

#### 1/12/2022

1. create react app using npm 
```shortcuts
rsf -> create a function component
rcc -> create a class component
```

#### 2/12/2022

1. Completed a simple todo list app
2. But I was stuck on function callbacks for the whole night LOL **>_<** So here are some tips for callbacks in React:
   1. If the function is **directly called** from event handlers **with parameters,** or you want to have access to the event, the function should be higher-order function
   2. That's probably it... Maybe I will come back for other cases in terms of the callbacks

#### 3/12/2022 - 6/12/2022

1. Literally did nothing but resting and was going through a shoulder strain which fxxked me up..
2. Went for k.dot's concert on Monday (5/12/2022). And that was sooooo fucking dope!
3. Will continue on React starting from 7/12/2022.

#### 8/12/2022
1. Proxy Setup in React(Used when requesting data from servers): https://create-react-app.dev/docs/proxying-api-requests-in-development/ 
2. for reference: [setupProxy.js](react_app/4_src_proxy/setupProxy.js)

#### 11/12/2022
1. created the static components for searching github users

#### 12/12/2022
1. github user search done
2. using pubsub-js for passing data between components instead of passing by props

#### 13-14/12/2022
1. Attended 2 graduation ceremonies :)

#### 15/12/2022
1. "react-router-dom": "^5.3.4" (latest should be ^6.0.0)
2. Router component should be the outermost tag
3. ```
   <Demo>Hello React</Demo>
   'Hello React' will be passed to the component in props as 'children'
   ```

#### 19/12/2022
1. Happy Graduation!

#### 22/12/2022
1. ```<Redirect/>``` can be used for the default page.

#### 23/12/2022
1. Nested router
2. Pass parameters to route component
3. Passing through **state** will not show the parameters in url
4. programmatic routing basically depends on **props.history.push()/replace()/goBack()/goForward()** 

#### 25-26/12/2022
1. Merry Christmas!
2. Have gone through some UI components and built a very ugly website including some very basic routing

#### 28/12/2022
1. redux is only responsible for state management, so we need to re-render the page manually
2. [how redux is used in a component](react_with_redux/2_src_simple_redux/components/Count/Count.jsx)
3. must use middleware (thunk) to handle async action in redux
4. async action will always call a sync action
5. UI component cannot use Redux's api but only container component will be communicating with redux
6. mapStateToProps() mapDispatchToProps()

#### 29/12/2022
1. pass store in [index.js](react_with_redux/7_src_provider/index.js) using **Provider**
2. UI component can be in the same file with container

### 31/12/2033
1. [redux dev tools import](react_with_redux/src/redux/store.js)