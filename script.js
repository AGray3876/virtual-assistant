
function send() {
  console.log('sent')
  var message = document.getElementById("typebox").value
  console.log(message)
  outputdiv = document.getElementById('outputdiv')


  respond()
}

function respond() {
  const outputdiv = document.getElementById('outputdiv')
  message = document.getElementById('typebox').value
  document.querySelector('input[name="typebox"]').value = '';

  let gp = message.search(/hello/i)
  let sp = message.search(/search for/i)
  let up = message.search(/http/i)
  let mp = message.search(/play/i)
  let ap = message.search(/advice/i)

  if (gp > -1) {
    var gl = [
      'Hello There!',
      'How may I help you today?',
      'Another day, another program... what can I help you with?', "Don't hit me master!",
      'Hello!'
    ];

    // use _.sample
    g = gl[Math.floor(Math.random() * gl.length)];

    outputdiv.innerHTML = g
  }
  if (sp > -1) {
    var sl = [
      'Searching for mom jokes.', "We're going on a trip, in our favorite search engine!", 'Searching for celebrity feet pics.'
    ]
    s = message.replace(/search for/i, '')
    sr = sl[Math.floor(Math.random() * sl.length)];
    outputdiv.innerHTML = sr
    window.location.href = "https://google.com/search?q=" + s;
  }
  if (up > -1) {
    p = message.search("://")
    console.log(p)
    if (p > 3) {
      window.location.href = message
    }
    if (p < 4) {
      outputdiv.innerHTML = "Did you type a url? If so, be sure to type the url in the correct format."
    }
  }
  // if (ap > -1) {
  //   outputdiv.innerHTML = "What do you need advice with?"
  //   advice = document.createElement("INPUT")
  //   advice.setAttribute("type", "text")
  //   advice.setAttribute("placeholder", "My dog ran away, what should I do?")
  //   advice.setAttribute("id", "advice")
  //   advice.setAttribute("name", "advice")
  //   advice.setAttribute("class", "advice")
  //   document.body.appendChild(advice)
  //   adbut = document.createElement("BUTTON")
  //   adbut.setAttribute("type", "button")
  //   adbut.setAttribute("onclick", "getadvice()")
  //   adbut.setAttribute("class", "adbut")
  //   adbut.textContent = "Get Advice"
  //   document.body.appendChild(adbut)
  // }

  // function getadvice() {
  //   let advice = document.getElementById('advice')
  //   window.location.href = advice
  // }

}
