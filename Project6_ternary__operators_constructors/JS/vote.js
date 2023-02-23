function vote_Function() {
    var Age, can_vote;
    Age = document.getElementById("Age") .value;
    can_vote = (Age < 18) ? "You are inelligible":"You are elligible";
    document.getElementById("Vote") .innerHTML = can_vote + " to vote."
}