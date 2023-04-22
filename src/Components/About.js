import React from 'react'

function About(props) {
  return (
    <div  className='container' style={ {color: props.mode === "dark" ? "white" : "black"} }>
      Welcome to our text utility app, your go-to tool for word count and content editing. With our app, you can easily keep track of your word count as you write, so you can stay on target with your writing goals.In addition, our app features content editing tools such as text formatting, search and replace, and automatic saving. These features allow you to quickly and easily edit your content for maximum impact and efficiency.Our app is designed to be user-friendly and intuitive, so you can start using it right away without any special training or technical knowledge. With our text utility app, you can take your writing to the next level and achieve your goals faster and more efficiently than ever before.

    </div>
  )
}

export default About
