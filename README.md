# Saas Landing page


## Table of contents
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)




### Screenshot

![](./Screenshot%202024-07-22%20090902.png)


### Links

- Solution URL: [Solution URL](https://github.com/JasperMunene/saas-landing)
- Live Site URL: [Live Site URL](https://saaslanding0.netlify.app/)

## My process

### Built with
- Semantic HTML5 markup
- Mobile-first workflow
- [Framer](https://www.framer.com/motion/) - Animation library
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework


### What I learned
During this project, I gained hands-on experience with Framer, a powerful tool for creating interactive designs and prototypes. I learned how to leverage Framer Motion to implement smooth animations and transitions in my React.js application, enhancing the user experience. Framer's intuitive interface and robust features allowed me to design complex interactions with ease, making my development process more efficient and my final product more polished. This experience has significantly improved my skills in modern web development and animation techniques.

```js
 const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

    
```


### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - This helped me get solutions to the coding problems I had.
- [React Docs](https://react.dev/reference/react) - This helped me with knowing how to handle state management
- [Tailwind Docs](https://tailwindcss.com/docs/) - This helped me know how to style different components
- [Framer](https://www.framer.com/motion/) - This helped me know how to add animations different components

## Author

- Website - [Jasper Munene](https://jaspermunene.netlify.app/)

