var thumbUp = document.getElementsByClassName("fa-thumbs-up");
document.querySelector('.quoteButton').addEventListener('click', randomQuote)
var trash = document.getElementsByClassName("fa-trash");
let quotes = document.querySelector('.showTheQuote')
let myQuotes = [
  "You are capable of great things.",
  "Believe in yourself and all that you are.",
  "You are loved and appreciated.",
  "Your potential is limitless.",
  "You have the power to make a difference.",
  "Don't give up on your dreams.",
  "You are stronger than you think.",
  "Your hard work will pay off.",
  "Every day is a new opportunity.",
  "You are enough just as you are.",
  "Your positive attitude will lead to success.",
  "You have the ability to overcome any obstacle.",
  "You are making progress, keep going!",
  "Believe in your ability to achieve your goals.",
  "You are capable of making a positive impact.",
  "Your determination will bring you far.",
  "Don't be afraid to take risks.",
  "You have the strength to face any challenge.",
  "You are deserving of love and happiness.",
  "Your creativity knows no bounds.",
  "You are a unique and valuable individual.",
  "Your passion will lead you to greatness.",
  "You are capable of amazing things.",
  "Believe in yourself and your abilities.",
  "Your efforts will pay off in the end.",
  "You have the power to change the world.",
  "You are capable of overcoming any fear.",
  "Your kindness and generosity are appreciated.",
  "You are making a difference in the world.",
  "Your intelligence and hard work will take you far.",
  "You have the ability to create a better future.",
  "Believe in your dreams and make them a reality.",
  "You are capable of achieving anything you set your mind to.",
  "Your perseverance and dedication will lead to success.",
  "You have the potential to make a lasting impact.",
  "You are an important part of this world.",
  "Your actions have the power to inspire others.",
  "You are capable of accomplishing great things.",
  "Believe in yourself and your unique talents.",
  "Your hard work and determination will pay off.",
  "You have the ability to overcome any challenge.",
  "You are worthy of love and respect.",
  "Your positivity and optimism will attract good things.",
  "You are capable of creating your own happiness.",
  "Believe in your abilities and trust the process.",
  "Your persistence and resilience will lead to success.",
  "You have the power to make a difference in someone's life.",
  "You are capable of achieving greatness, one step at a time."
];




Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

function randomQuote() {
  let theQuote = Math.floor(Math.random() * myQuotes.length)
  quotes.innerText = myQuotes[theQuote]

}



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].textContent
        const msg = this.parentNode.parentNode.childNodes[3].textContent
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
