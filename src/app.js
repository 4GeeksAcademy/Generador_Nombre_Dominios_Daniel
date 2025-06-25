let pronoun = ['the', 'our', 'your', 'my'];
let adj = ['great', 'big', 'domain', 'boring'];
let noun = ['jogger', 'racoon', 'zebra', 'expantion'];
let domains = ['.com', '.cr', '.org', '.go'];

const combinations = () => {
  for (let indPron = 0; indPron < pronoun.length; indPron++) {
    const pronElm = pronoun[indPron];

    for (let indAdj = 0; indAdj < adj.length; indAdj++) {
      const adjElm = adj[indAdj];

      for (let indNoun = 0; indNoun < noun.length; indNoun++) {
        const nounElm = noun[indNoun];

        for (let indDom = 0; indDom < domains.length; indDom++) {
          const domElm = domains[indDom];

          let result = pronElm + adjElm + nounElm + domElm;
          console.log(result);
        }
      }


    }
  }

};
combinations();