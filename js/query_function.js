var nbQuestion = 0;
var question = ["Qui est la plus belle ?", "deux", "cinq"];
var answers = [["test", "bla","toto","tat"], ["titi","tutut","pipi","piapo"]]

function display(){
    $("#nb").text("Question " + (nbQuestion + 1));
    $("#question").text(question[nbQuestion]);
    $("#answer_one").text(answers[nbQuestion][0]);
    $("#answer_two").text(answers[nbQuestion][1]);
    $("#answer_three").text(answers[nbQuestion][2]);
    $("#answer_four").text(answers[nbQuestion][3]);
}
    
$(document).ready(function () {

    // Button
    $("#demarrer").click(function(){
    $("#demarrer").hide();
        display();
    });
    $("#next").click(function () {
        nbQuestion++;
        display();
    });
    $("#previous").click(function () {
        nbQuestion--;
        display();
    });
});
