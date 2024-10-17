axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {

    const numbersEmail = 10;

    const emailList = response.data;
    console.log(emailList);
    
    const listElement = document.getElementById("indirizzi-email");
    console.log(listElement);
    

    for (let i = 0; i < numbersEmail; i++) {
      const liElement = document.createElement("li");
      liElement.innerHTML = `email-${i + 1}: email.@libero.it`;
      listElement.appendChild(liElement);
    }
  })

  .catch((error) => {
    console.error(error);
  });

