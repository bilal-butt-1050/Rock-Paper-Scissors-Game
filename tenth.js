let user_score =0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const user_score_para = document.querySelector("#user-score")
const comp_score_para = document.querySelector("#comp-score")



const comp_choice = () =>{
    const options = ["rock",'paper',"scissors"];
    const random_num = Math.floor(Math.random() * 3);
    return options[random_num];
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        play_game(user_choice);
    })
});

const draw_game = () =>{
    msg.classList.remove("win","lose");
    msg.innerText = "Game Drawn";
}

const show_winner = (user_win, user_choice, computer_choice)=>{
    msg.classList.remove("win","lose");

    if(user_win){
        user_score++;
        user_score_para.innerText = user_score;
        msg.innerText = `You Won :) Your ${user_choice} beats ${computer_choice}`;
        msg.classList.add("win");
        msg.classList.remove("lose");
    }
    else{
        comp_score++;
        comp_score_para.innerText = comp_score;
        msg.innerText = "You Lost";
        msg.innerText = `You Lost :( ${computer_choice.charAt(0).toUpperCase() + computer_choice.slice(1)} beats your ${user_choice}`;
        msg.classList.add("lose");
        msg.classList.remove("win");
    }
}

const play_game = (user_choice) => {
    const computer_choice = comp_choice();
    console.log("you choose ",user_choice);
    console.log("Computer choose ",computer_choice);

    if(user_choice == computer_choice){
        draw_game();
    }
    else{
        let user_win = true;

        if(user_choice == "rock"){
            if(computer_choice == "paper"){
                user_win = false;
            }
            else{
                user_win = true;
            }
        }
        else if(user_choice == "paper"){
            if(computer_choice == "scissors"){
                user_win = false;
            }
            else{
                user_win = true;
            }
        }
        else{
            if(computer_choice == "rock"){
                user_win = false;
            }
            else{
                user_win = true;
            }
        }
        show_winner(user_win, user_choice, computer_choice);
    }
}