
const qBank = [
  {
    question:
      "how build the app ?",
    answers: ["fadsfaf", "sadasdas", "dasjfbka", "fnajf"],
    correct: "sadasdas",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["fnjadfba", "sarthak", "fasfad", "devesh"],
    correct: "fnjadfba",
    questionId: "093909"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "009039"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "090089"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "01010101"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "092299"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "222099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "2222099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "09922099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "222292099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "0998999099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "09459099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "0912219099"
  },

];

// n = 5 to export 5 question
const newVar = (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
export default newVar;
