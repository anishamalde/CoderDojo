// keep track of where the opening branckets are
// if you meet a closing bracket, close (balance) the most recent opened one, it is legit
// if you meet a closing bracket with no opened bracket, delete it (set to unbalanced), not legit
// if you get to the end and have opened brackets opened, delete them (set them to unbalanced) as they are not legit

// 2 states for a bracket, balanced, unbalanced.

// { position: 0, balanced: false, type: 'open' }

const balance = string => {
  return string
    .split("")
    .reduce((acc, item, i) => {
      if (item === "(") {
        return [
          ...acc,
          { position: i, balanced: false, type: "open", value: item },
        ];
      }

      if (item === ")") {
        const unbalancedOpenBrackets = acc
          .filter(item => item.type === "open" && !item.balanced)
          .sort((a, b) => b.position - a.position);
        if (unbalancedOpenBrackets[0]) {
          unbalancedOpenBrackets[0].balanced = true;
          return [
            ...acc,
            { position: i, balanced: true, type: "closed", value: item },
          ];
        }

        return [
          ...acc,
          { position: i, balanced: false, type: "closed", value: item },
        ];
      }

      return [
        ...acc,
        { position: i, balanced: true, type: "other", value: item },
      ];
    }, [])
    .filter(item => item.balanced)
    .map(item => item.value)
    .join("");
};

module.exports = {
  balance,
};
