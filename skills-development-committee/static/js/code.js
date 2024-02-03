document.addEventListener("alpine:init", () => {
  Alpine.data("SkillsDevelopmentCommitteeTookkit", () => {
    return {
      skills_development_facilitator: false,
      skills_development_committee: false,
      skills_development_wsp_atr: false,
      skills_development_laws: false,
      skills_development_sdc_structure: false,
      skills_development_sdc_resources: false,
      skills_development_quiz: false,
      skills_development_sdc_word_game: false,
      skills_development_home: true,
      skills_development_add_quick_link: false,

      openHome(currentSection) {
        this.skills_development_facilitator = false;
        this.skills_development_committee = false;
        this.skills_development_wsp_atr = false;
        this.skills_development_laws = false;
        this.skills_development_sdc_structure = false;
        this.skills_development_sdc_resources = false;
        this.skills_development_quiz = false;
        this.skills_development_sdc_word_game = false;
        this.skills_development_home = false;
        this.skills_development_add_quick_link = false;

        if (currentSection == "skills_development_facilitator") {
          this.skills_development_facilitator = true;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_committee") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = true;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_wsp_atr") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_wsp_atr = true;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_laws") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = true;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_quiz") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = true;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_sdc_word_game") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = true;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_sdf") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_sdc_structure") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = true;
          this.skills_development_sdc_resources = false;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_sdc_resources") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = true;
          this.skills_development_add_quick_link = false;
        } else if (currentSection == "skills_development_add_quick_link") {
          this.skills_development_facilitator = false;
          this.skills_development_committee = false;
          this.skills_development_wsp_atr = false;
          this.skills_development_laws = false;
          this.skills_development_quiz = false;
          this.skills_development_sdc_word_game = false;
          this.skills_development_home = false;
          this.skills_development_sdc_structure = false;
          this.skills_development_sdc_resources = false;
          this.skills_development_add_quick_link = true;
        }
      },

      init() {
        //load the save user info when page reloads
        this.loadProgress()
      },


      

      username: "",
      currentUsername: "",
      quizInProgress: false,
      quizCompleted: false,
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
      questions: [

        {question: "What is the capital of France?", options: ["Pretoria", "Paris", "Johannesburg"],answer: 1,},
        {question: "Who wrote 'To Kill a Mockingbird'?", options: ["Me", "You", "Us"],answer: 1,},
        {question: "What is the chemical symbol for gold?", options: ["Na", "Ag", "Au"],answer: 2,},
        {question: "WHat does CHieta do ?", options: ["Chemical enterprise", "Pilot", "Marketing"],answer: 0,},
        {question: "Who did chieta contract do fix the web page ?", options: ["UJ", "Accenture", "None"],answer: 0,},
        {question: "WHo is the contact person", options: ["Paris", "Prof", "Fabchi"],answer: 0,},
        

       
        // Add more questions as needed
      ],
      saveProgress() {
        // Save progress to storage
        this.username = this.currentUsername

        localStorage.setItem("quiz_username", this.username);

        // // Save other progress data if needed
      },
      loadProgress() {
        // Load progress from storage based on username
        this.username = localStorage.getItem("quiz_username");
        if (username) {
          this.username = username;
          // Load other progress data if needed
        }
      },
      
      startQuiz() {
        this.quizInProgress = true;
        this.quizCompleted = false;
        this.currentQuestionIndex = 0;
        this.score = 0;
      },
      endQuiz() {
        // Calculate score
        // Save progress if needed
        this.quizInProgress = false;
        this.quizCompleted = true;
      },
      nextQuestion() {
        if (this.selectedOption !== null) {
          if (
            this.selectedOption ===
            this.questions[this.currentQuestionIndex].answer
          ) {
            this.score++;
          }
          if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedOption = null;
          } else {
            this.endQuiz();
          }
        } else {
          alert("Please select an option before proceeding.");
        }
      },
      resetQuiz() {
        this.quizInProgress = false;
        this.quizCompleted = false;
        this.currentQuestionIndex = 0;
        this.selectedOption = null;
        this.username="";
        this.score = 0;
      },
    };
  });
});
