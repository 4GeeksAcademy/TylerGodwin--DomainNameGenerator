const domainNameGenerator = () => {
  const domains = document.querySelector("#domains");

  let pronoun = ["all", "the", "our", "those", "that", "this"];
  let adj = ["giant", "scary", "gooey", "hot", "fuzzy", "dark"];
  let noun = ["people", "fish", "computer", "chair", "house", "shirt"];
  let siteType = [".com", ".edu", ".gov", ".org", ".net"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < siteType.length; d++) {
          domains.innerHTML +=
            pronoun[a] + adj[b] + noun[c] + siteType[d] + " ";
        }
      }
    }
  }
};

window.onload = domainNameGenerator();
