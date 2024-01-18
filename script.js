let AttemptsCount = 0;

document.getElementById("check-btn").addEventListener("click", (e) => {
  e.preventDefault();
  AttemptsCount += 1;
  document.getElementById("Attempts").textContent = AttemptsCount;
  const userGuess = document.getElementById("user-guess").value;

  function Game() {
    // Check if user entered a valid guess
    if (userGuess === "" || parseInt(userGuess) === 0) {
      alert("Enter a valid guess!");
      return;
    }

    let min = 1;
    let max = 10;
    let genrated;

    const GenRandoNum = () => {
      genrated = Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GenRandoNum();

    function CheckIT() {
      let rightAttemptsCount = 0;
      let wrongAttemptsCount = 0;

      // Checking if Guess is Low or High
      if (parseInt(userGuess) === parseInt(genrated)) {
        rightAttemptsCount += 1;
        document.getElementById("Right-Attempls").textContent =
          rightAttemptsCount;
        document.getElementById("Start-or-Complete").textContent =
          "Correct Guess!";
        document.body.classList.add("bg-green-500");
        setTimeout(() => {
          document.body.classList.remove("bg-green-500");
        }, 1000);
      } else if (parseInt(userGuess) < parseInt(genrated)) {
        document.body.classList.add("bg-red-600");
        document.getElementById("Start-or-Complete").textContent = "Too Low!";
        wrongAttemptsCount += 1;
        document.getElementById("Wrong-Attempls").textContent =
          wrongAttemptsCount;
        setTimeout(() => {
          document.body.classList.remove("bg-red-600");
        }, 1000);
      } else if (parseInt(userGuess) > parseInt(genrated)) {
        document.body.classList.add("bg-blue-500");
        document.getElementById("Start-or-Complete").textContent = "Too High!";
        wrongAttemptsCount += 1;
        document.getElementById("Wrong-Attempls").textContent =
          wrongAttemptsCount;
        setTimeout(() => {
          document.body.classList.remove("bg-blue-500");
        }, 1000);
      }
    }

    CheckIT();
  }

  Game();
});

document.getElementById("again-reset").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("Right-Num").textContent = "?";
  document.getElementById("user-guess").value = "";
  document.getElementById("Start-or-Complete").textContent = "Guessing....";
});
