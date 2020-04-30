// przykład loose coupling (2)

class QuizLooseCoupled {
    questions: Question[]
    constructor(questions: Question[]) {
          this.questions = questions
    }
    // nie wnikamy w jaki sposób sprawdzana jest prawidłowa odpowiedź.
    // Nie interesują nas sąsiedzi naszych sąsiadów. 
    // Z poziomu quizu nie wiemy, że istnieje obiekt answer
    // (quiz<->question||||||answer). 
    // Zakładamy, że nas sąsiad nam to dostarczy
     countCorrectAnswers(): number {
      return this.questions.filter(q => q.isAnswerCorrect()).length
    }
  }
  
  class QuizOption {
    private id: string
    private title: string
      constructor(id: string, title: string) {
          this.id = id
          this.title = title
      }
      getId () {
          return this.id
      }
  }
  
  class Question {
    private text: string
    private options: QuizOption[] 
    private answer: QuizOption
    private userAnswer: QuizOption
    constructor (text: string, options: [], answer: QuizOption, userAnswer: Option ) {
        this.text = text
        this.options = options
        this.answer = answer
        this.userAnswer = userAnswer
    }
    // tutaj troszczymy się o naszego bezpośredniego sasiada question <-> answer
    isAnswerCorrect() {
      return this.answer.getId() === this.userAnswer.getId()
    } 
  } 
  
  
