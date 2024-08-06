<script setup>
import emailjs from '@emailjs/browser';

const submitForm = async () => {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
    to_email: 'arthurlenairpro@gmail.com'
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    );
    name.value = '';
    email.value = '';
    message.value = '';
    alert('Votre message a été envoyé avec succès!');
  } catch (error) {
    alert('Une erreur est survenue lors de l\'envoi du message.');
  }
};
</script>

<template>
  <section id="contact">
    <h1>Me contacter</h1>
    <div class="container">
      <form @submit.prevent="submitForm">
        <label for="name"><input type="text" id="name" v-model="name" required placeholder="Nom"></label>
        <label for="email"><input type="email" id="email" v-model="email" required placeholder="Email"></label>
        <label for="message"><textarea id="message" v-model="message" required placeholder="Message"></textarea></label>
        <button class="button" type="submit">Envoyer</button>
      </form>
      <section>
      <div>
        <h3>Contact</h3>
        <p>arthurlenairpro@gmail.com</p>
        <h3>Localisation</h3>
        <p>Nantes, <br>
            France</p>
      </div>
      <div>
        <span>
          <a href="https://twitter.com/arthurlenerf" target="_blank">
            <img class="lien" src="../assets/Twitter logo.jpg" alt="Profil Twitter">
          </a>
        </span>
        <span>
          <a href="https://github.com/ArthurLnR" target="_blank">
            <img class="lien" src="../assets/github logo.webp" alt="Photo GitHub">
          </a> 
        </span>
      </div>
      </section> 
    </div>
  </section>
</template>

<style>

h1 {
  font-size : 2rem;
  font-weight: bold;
  
}
section {
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7%;
  margin-bottom: 30px;
  font-family: 'Bai Jamjuree', sans-serif;
}

section section {
  border: none;
  padding: 20px;
}

.container {
  display: flex;
}


form {
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  padding: 20px;
  width: 100%;
  max-width: 500px;
}

label {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  margin-right: 30px;
}

label input {
  border: none;
  outline: none;
  width: 100%;
  padding: 5px 0;
  text-indent: 5px;
  background-color:transparent;
}

button[type="submit"] {
  border: 1px solid #454843;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.lien{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 1;
    }
    
.lien:hover {
    opacity: 0.5;
    }

    .button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #212220;
  border: 1px solid #687066;
  border-radius: 15px;
}

.button:hover {background-color: #2F312E}

.button:active {
  background-color: #2F312E;
    transform: translateY(4px);
}

</style>
