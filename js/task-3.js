function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();

  return (
    normalizedMessage.includes('spam') || normalizedMessage.includes('sale')
  );
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only today!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails.'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
