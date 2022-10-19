let form = document.getElementById("form");

form.addEventListener("submit", function getname(e) {
  e.preventDefault();
  let playername = document.getElementById("cricketername").value;
  console.log(playername);
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/players/search?plrN=${playername}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
        "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let id = data.player[0].id;
      fetch(
        `https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=${id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
            "x-rapidapi-key":
              "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let playerimg = document.getElementById("playerimg");
          playerimg.src = `${data.image}`;

          let name = document.getElementById("name");
          name.innerHTML = "";
          name.innerHTML = `<b>Full Name:</b> ${data.name}`;

          let dob = document.getElementById("dob");
          dob.innerHTML = "";
          dob.innerHTML = `<b>DOB:</b> ${data.DoB}`;

          let birthplace = document.getElementById("birthplace");
          birthplace.innerHTML = "";
          birthplace.innerHTML = `<b>Birth Place:</b> ${data.birthPlace}`;

          let bat = document.getElementById("bat");
          bat.innerHTML = "";
          bat.innerHTML = `<b>Bat:</b> ${data.bat}`;

          let bowl = document.getElementById("bowl");
          bowl.innerHTML = "";
          bowl.innerHTML = `<b>Bowl:</b> ${data.bowl}`;

          let height = document.getElementById("height");
          height.innerHTML = "";
          height.innerHTML = `<b>Height:</b> ${data.height}`;

          let team = document.getElementById("team");
          team.innerHTML = "";
          team.innerHTML = `<b>Teams:</b> ${data.teams[0]}`;

          let batodirank = document.getElementById("batodirank");
          batodirank.innerHTML = "";
          batodirank.innerHTML = `<b>Rank(Bat):</b> <b>Best(ODI):</b> ${data.currRank.bat.odiBestRank} <b>Current Rank:</b> ${data.currRank.bat.odiRank}`;

          let batt20rank = document.getElementById("batt20rank");
          batt20rank.innerHTML = "";
          batt20rank.innerHTML = `<b>Rank(Bat):</b> <b>Best(T20):</b> ${data.currRank.bat.t20BestRank} <b>Current Rank:</b> ${data.currRank.bat.t20Rank}`;

          let battestrank = document.getElementById("battestrank");
          battestrank.innerHTML = "";
          battestrank.innerHTML = `<b>Rank(Bat):</b> <b>Best(Test):</b> ${data.currRank.bat.testBestRank} <b>Current Rank:</b> ${data.currRank.bat.testRank}`;

          let bowlodirank = document.getElementById("bowlodirank");
          bowlodirank.innerHTML = "";
          bowlodirank.innerHTML = `<b>Rank(Bowl):</b> <b>Best(ODI):</b> ${data.currRank.bowl.odiBestRank} <b>Current Rank:</b> ${data.currRank.bowl.odiRank}`;

          let bowlt20rank = document.getElementById("bowlt20rank");
          bowlt20rank.innerHTML = "";
          bowlt20rank.innerHTML = `<b>Rank(Bowl): </b><b>Best(T20):</b> ${data.currRank.bowl.t20BestRank} <b>Current Rank:</b> ${data.currRank.bowl.t20Rank}`;

          let bowltestrank = document.getElementById("bowltestrank");
          bowltestrank.innerHTML = "";
          bowltestrank.innerHTML = `<b>Rank(Bowl):</b> <b>Best(Test):</b> ${data.currRank.bowl.testBestRank} <b>Current Rank:</b> ${data.currRank.bowl.testRank}`;

          let bio = document.getElementById("bio");
          bio.innerHTML = "";
          bio.innerHTML = `<b>Biography:</b> ${data.bio}`;
        });
    });
});