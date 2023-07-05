const URL = "https://datagroups.fundamentos-29.repl.co/";

async function getApi() {
  try {
    const data = await fetch(URL);
    const answer = await data.json();
    return answer;
  } catch (e) {
    console.log(e, " => Haz fallado , sigue intentando XD");
  }
}

async function main() {
  const data = await getApi();
  printGroup(data);
}

function printGroup(data) {
  const dataHTML = document.querySelector(".groups");

  let html = "";
  for (const { title, subGroups } of data) {
    html += `<div class="group"><h2>${title}</h2><div class="subGroups">${printSubGroups(
      subGroups
    )}</div>
              
              
              </div>`;
  }
  dataHTML.innerHTML = html;
}

function printSubGroups(array) {
  let html = "";

  for (const { title, participants } of array) {
    html += `<div class="subGroup"><h3>${title}</h3>${printemails(
      participants
    )}</div>
           `;
  }
  return html;
}

function printemails(array) {
  let html = "";

  for (const { name, email } of array) {
    html += `<div class="participants"><p>${name}</p><p>${email}</p>
     
               </div>`;
  }
  return html;
}

main();
