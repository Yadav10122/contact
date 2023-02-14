import React from 'react'

export default function About() {
  return (
    <div className='container' style={{ marginTop: 200 }}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>About project</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              It is a web app where we  can ADD,DELETE and Update the the contact.In this project I used tech stack<strong>React,HTML,CSS,JAVASCRIPT,MockApi,Bootstrap,localStorage</strong>.This project work dynamically on <strong>CRUD</strong> functionalityby using post,put,get,delete method.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>About me</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Hello, my name is Aman Yadav(BTech 2022), and I created this project. I am a front-end developer. I have completed my reactJS, html, CSS, and Javascript skills from Coding Ninjas. It was a really great experience to learn from such a great team. I have also done my DSA training from Coding Ninjas. I have also developed some projects that you can have a look into.  <a href='https://github.com/Yadav10122/contact' target="_blank" rel="noreferrer">This is my github repository link.</a> You can have a look I have worked on  different projects and will be working on more. I am a quick learner. I like to try new things. This is my thing. So this is all about me You can connect with me <strong> amanyadav10122@gmail.com or 8305170180  </strong> and we can be friends, or you can be my boss. Who knows? See you later.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
