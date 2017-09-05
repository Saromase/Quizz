var Player = function () {
    var correct;
    this.init = function () {
        this.correct = 0;
    }
}
var Quizz = function () {
    var nbQuestion;
    var question;
    var answers;
    var answersGood;
    this.init = function () {
        this.nbQuestion = 0;
        this.question = ["Timi", "deux", "cinq", "Timi", "deux", "cinq"];
        this.answers = [["test", "bla", "toto", "tat"], ["titi", "tutut", "pipi", "piapo"], ["test", "bla", "toto", "tat"], ["titi", "tutut", "pipi", "piapo"], ["test", "bla", "toto", "tat"], ["titi", "tutut", "pipi", "piapo"]];
        this.answersGood = ["test", "titi"];
    }
    this.display = function () {
        $("#nb").html("Question " + (this.nbQuestion + 1));
        $("#question").html(this.question[this.nbQuestion]);
        $("#answer_one").html(this.answers[this.nbQuestion][0]);
        $("#answer_two").html(this.answers[this.nbQuestion][1]);
        $("#answer_three").html(this.answers[this.nbQuestion][2]);
        $("#answer_four").html(this.answers[this.nbQuestion][3]);
    }
    this.next = function () {
        this.nbQuestion++;
        this.display();
    }
    this.previous = function () {
        this.nbQuestion--;
        this.display();
    }
}



var quizz;
$(document).ready(function () {

    // Button
    $("#demarrer").click(function () {
        $("#demarrer").hide();
        var user = new Player();
        quizz = new Quizz();
        user.init();
        quizz.init();
        quizz.display();
    });
    $("#next").click(function () {
        quizz.next();
    });
    $("#previous").click(function () {
        quizz.previous();
    });
});
