//// przykład tight coupling (1)
class QuizWhichBreaksLawOfDemeter {
    private questions: Question[]
    constructor(questions: Question[]) {
          this.questions = questions
      }
    // wnikamy głęboko w szczegóły answer, ktory nie jest naszym bezpośrednim sąsiadem 
    // (quiz <-> question <-> answer) 
    // isAnswerCorrect wywołuje question.getUserAnswer().getId()
    // Łamiemy Prawo Demeter. 
    isAnswerCorrect(question: Question) {
      return question.getAnswer().getId() == question.getUserAnswer().getId()
    } 
  
    countCorrectAnswers(): number {
      return this.questions.filter(q => this.isAnswerCorrect(q)).length
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
    getUserAnswer(): QuizOption {
        return this.userAnswer
    }
    getAnswer(): QuizOption {
        return this.answer
    }
  } 
  
  