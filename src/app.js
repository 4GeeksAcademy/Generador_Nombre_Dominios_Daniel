const pronouns = ['the', 'our', 'your', 'my'];
const adjectives = ['great', 'big', 'domain', 'boring'];
const nouns = ['jogger', 'racoon', 'zebra', 'expantion'];
const domains = ['.com', '.cr', '.org', '.go'];

const combinations = () => {
  pronouns.forEach(pronoun => {
    adjectives.forEach(adj => {
      nouns.forEach(noun => {
        domains.forEach(domain => {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        });
      });
    });
  });
};

combinations();