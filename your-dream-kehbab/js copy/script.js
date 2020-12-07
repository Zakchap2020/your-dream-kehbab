// array to track the chat messages
const chatLogs = [];
const sauces = [
  "hummus",
  "garlic yoghurt",
  "satay",
  "mint",
  "hot chilli",
  "sweet chilli",
  "BBQ" + " and " + "mayonaise",
];
/**
 *
 * FINISH THIS FUNCTION!
 */
const decisionTree = {
  yes: {
    question: "Do you prefer Falafels or Halloumi?",
    halloumi: {
      answer: `So you want cheese inside your kebab, you're that person who orders plain cheese pizza, just make a toastie in my opinion....... Kidding halloumi is a very interesting type of cheese and is definitely delicious in a kebab. What kind of sauces do you want? A maximum of 3 per kebab is allowed The available sauces are ${sauces.toString()}`,
    },
    falafel: {
      answer: `So you only want falafels that's fine, unless you just don't like cheese in that case we can never be friends. However what kind of sauces do you want? A maximum of 3 per kebab is allowed The available sauces are ${sauces.toString()}`,
    },
    whatsThat: {
      answer:
        "https://thismessisours.com/authentic-falafel/ https://www.thespruceeats.com/what-is-halloumi-cheese-3376845",
    },
  },
  no: {
    question: "Do you like chicken or lamb or are you keen to try both?",

    chicken: {
      answer: `Ah yes the play safe person, I know chicken is good so I'll just have that. Chicken is awesome in a kebab so good choice. What kind of sauces do you want? A maximum of 3 per kebab is allowed. The available sauces are ${sauces.toString()}`,
    },
    lamb: {
      answer: `Lamb is a good choice, especially if you're a lamb roast person, definitely amazing in a kebab as well. What kind of sauces do you want? A maximum of 3 per kebab is allowed. The available sauces are ${sauces.toString()}`,
    },
    both: {
      answer: `So you want both! Bit of an adventurous person, you're definitely the type of person who does use all sides of a cheese grater, go you! Chicken and Lamb are an amazing combination. What kind of sauces do you want? A maximum of 3 per kebab is allowed. The available sauces are ${sauces.toString()}`,
    },
  },
};

// const a = document.createElement("a");
// const decisionTreequestionwhatsThat = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);

const getUserName = (msg) => {
  name = msg;
  if (name === null || undefined) {
    return "Please enter a name";
  } else if (name === Number) {
    return "Please use proper characters eg. letters no numbers";
  }
};

let current = decisionTree;

let atsauces = false;

let order = "";

const recommendedSaucesWFilling = [
  "hummus",
  "garlic yoghurt",
  "satay",
  "mint",
  "hot chilli",
  "sweet chilli",
  "BBQ",
  "mayonaise",
  "anything",
];

let name = "";

const getBotReply = (msg) => {
  if (name === "") {
    name = msg;
    document.getElementsByName("chat-input")[0].placeholder = "--Reply here--";
    return `Hi ${name} I am going to help you find your dream kehbab, first of all do want the vegetarian options?`;
  }
  if (
    msg.toLowerCase() === "yes" ||
    msg.toLowerCase() === "yo" ||
    msg.toLowerCase() === "yeah" ||
    msg.toLowerCase() === "y"
  ) {
    document.getElementsByName("chat-input")[0].placeholder =
      "type 'whats that?' or '?' for information on fillings";
    current = current.yes;
    return current.question;
  }

  if (
    msg.toLowerCase() === "no" ||
    msg.toLowerCase() === "nah" ||
    msg.toLowerCase() === "nope" ||
    msg.toLowerCase() === "n"
  ) {
    current = current.no;
    return current.question;
  }
  if (msg === "no") {
    current = current.no;
    return current.question;
  }

  if (msg === "halloumi") {
    recommendedSaucesWFilling[1];
    // recommendedSaucesWFilling.halloumi;
    atsauces = true;
    current = current.halloumi;
    order = order + "halloumi kehbab";
    document.getElementsByName("chat-input")[0].placeholder =
      "eg. sauce1, sauce2, sauce3";
    return `Halloumi goes well with ${recommendedSaucesWFilling[8]}`;
  }
  if (msg === "falafel") {
    atsauces = true;
    current = current.falafel;
    order = order + "falafel kehbab";
    document.getElementsByName("chat-input")[0].placeholder =
      "eg. sauce1, sauce2, sauce3";
    return `Falafel goes amazingly well with ${recommendedSaucesWFilling[1]} so it really is a must in terms of sauces, otherwise`;
  }
  if (msg === "both") {
    atsauces = true;
    current = current.both;
    order = order + "mixed meat kehbab";
    document.getElementsByName("chat-input")[0].placeholder =
      "eg. sauce1, sauce2, sauce3";
    return `Chicken and lamb go well with either ${recommendedSaucesWFilling[2]}, ${recommendedSaucesWFilling[7]} and/or ${recommendedSaucesWFilling[3]}. Satay and mint gives a sweet and refreshing taste to the kehbab and mayonaise is more of a savoury taste so depends what you like, hey why not just try them all together?`;
  }
  if (msg === "what's that" || msg === "whats that?" || msg === "?") {
    current = current.whatsThat;
    return `falafel tastes like a vegetarian meatball....its kind of grainy. Not bad if its done right. Hummus is like vegetable dip, except grainy and with more olive oil flavor. Both are made from chickpeas. Traditionally prepared from goat's and/or sheep's milk on the Eastern Mediterranean island of Cyprus, Halloumi is a white, layered cheese, similar to mozzarella. It is a semihard, unripened, and brined cheese with a slightly spongy texture. Its flavor is tangy and salty, and it has no rind.`;
  }
  if (msg === "chicken") {
    atsauces = true;
    current = current.chicken;
    order = order + "chicken kehbab";
    document.getElementsByName("chat-input")[0].placeholder =
      "eg. sauce1, sauce2, sauce3";
    return `Chicken goes amazingly well with ${recommendedSaucesWFilling[2]} or ${recommendedSaucesWFilling[7]} satay is the sweeter option and mayonaise is the more savoury option both work well together though.`;
  }

  if (msg === "lamb") {
    atsauces = true;
    current = current.lamb;
    order = order + "lamb kehbab";
    document.getElementsByName("chat-input")[0].placeholder =
      "eg. sauce1, sauce2, sauce3";
    return `Lamb goes amazingly well with all the sauces, however ${recommendedSaucesWFilling[2]} sauce is known to go down a treat with lamb`;
  }

  if (atsauces === true) {
    order = `${order} with ${msg} sauces`;
    return `Awesome!, your dream kehbab is a ${order}. Go in and get one today :).`;
  }

  return "I don't understand sorry please reply with proper response, Thanks :)";
};

// if (msg.toLowerCase() == "restart") {
//   current = decisionTree;
//   return current.output;
// }

const getReply = (msg) => {
  if (userInput === "yes") {
    current = current.yes;
    if (current.question) {
      promptUser(current.question);
    } else alert(current.answer);
  } else if (userInput === "no") {
    current = current.no;
    if (current.question) {
      promptUser(current.question);
    } else alert(current.answer);
  }
};

const renderChatbox = () => {
  // get a reference to the chatbox element
  const chatboxEl = document.getElementById("chatbox");

  // copy the latest set of messages, then reverses the new
  // array and takes the first 20 elements
  const recentMessages = [...chatLogs].reverse().slice(0, 20);
  /**
   * this one liner statement would be equivalent to:
   * var recentMessages = chatLog.slice();
   * recentMessages.reverse();
   * var last20RecentMessages = recentMessages.slice(0,20);
   */

  // markup to display
  let chatboxHTML = "";

  // create a chat item div element
  for (let message of recentMessages) {
    let markup = `
      <div class="chat-item chat-item-bot">${message.bot.replyMsg}</div>
      <div class="chat-item chat-item-user">${message.user.inputMsg}</div>
    `;
    chatboxHTML += markup;
  }

  // set the inner HTML
  chatboxEl.innerHTML = chatboxHTML;
};

// form submit handler
const handleChatSubmit = (event) => {
  // Stop the page from reloading when the form is submitted
  event.preventDefault();

  // get reference to the chat input
  const chatInput = document.getElementById("chat-input");

  // get the chat form input value
  const chatValue = chatInput.value;
  // clear the input ready for the next message
  chatInput.value = "";

  const botReply = getBotReply(chatValue);

  // Create a data model to save the chat log against
  const chatLog = {
    user: {
      inputMsg: chatValue,
    },
    bot: {
      replyMsg: botReply,
    },
    timestamp: new Date(),
  };

  // push the user message to the chat log
  chatLogs.push(chatLog);

  // render the chatbox
  renderChatbox();
};

// attach the submit event handler to the form here ...
const formEl = document.getElementById("chat-form");
formEl.addEventListener("submit", handleChatSubmit);
