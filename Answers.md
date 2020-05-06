1. What problem does the context API help solve?

     -Context API solves the problem of having to prop drill data through child components that may not need the data to get to deeping nested components that
     do need that data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -Actions are a plain JavaScript object that contains information. They are created by our action creator  which is triggered by an event to change some state.

    -Reducers specify how the application state responds to actions sent to the store.

    -store is the global stored place for the application's state for all components hooked up to have access to.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and your component state exists locially within the declared component. Redux, uses "stores" to hold application state. That means any component, anywhere in the app can access it as long as they hook into it.

Its better to use APPlication state for larger scale applications, component state for smaller scale.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk suplies use with dispatch to use to call mutiple actios at pnce

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    -My favorite state management that I've learned is Redux because I like the idea
    of the Redux store being the overlooking state container for the enitre application and the benefits that it provides.
