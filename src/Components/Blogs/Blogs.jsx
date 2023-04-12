import React from 'react'

const Blogs = () => {
  return (
    <div className='mx-20 my-20 flex flex-col justify-center gap-6'>
      <h1 className='text-3xl mb-4'>What is Context API?</h1>
      <hr className='border-[1px] border-blue-500' />
      <p>Context API is a useful feature in React that enables the passing of data down the component tree without the need for intermediate components to pass the props down manually. It is useful when there is data that is needed by many components at different levels of the component tree. <br />We use context API when : Multiple components share the same data: If multiple components in your React application require access to the same data, you can use Context API to avoid prop drilling & <br /> The data needs to be accessed at different levels of the component tree: If you have a large component tree with many nested components, it can be difficult to pass data down through props to each component that needs it. In this case, using Context API can simplify your code and make it more efficient.</p>
      <hr className='border-[1px] border-blue-500' />
      <h1 className='text-3xl mb-4'>What is Custom Hook?</h1>
      <p>In React, a custom hook is a JavaScript function that starts with the prefix use and follows the rules of hooks. It allows you to reuse stateful logic across multiple components without having to repeat the same code over and over again. <br /> Custom hooks are created by extracting some common logic from components and putting it in a separate function. The function can use built-in hooks such as useState, useEffect, useContext, or even other custom hooks to provide some functionality that can be used in other components.</p>
      <hr  className='border-[1px] border-blue-500' />
      <h1 className='text-3xl mb-4'>What is useRef?</h1>
      <p>useRef is a hook in React that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br /> useRef is mainly used to get a reference to a DOM element or a value that persists across renders without triggering a re-render. It is also used to store values that are expected to change frequently but don't trigger a re-render when changed.</p>
      <hr  className='border-[1px] border-blue-500' />
      <h1 className='text-3xl mb-4'>What is useMemo?</h1>
      <p>useMemo is a hook in React that allows you to memoize a function and only recompute its result if one of its dependencies has changed. Memoization is the process of caching the result of a function so that if the function is called again with the same arguments, the cached result is returned instead of recomputing the result.</p>
    </div>
    
  )
}

export default Blogs