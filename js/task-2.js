function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }

  return message.slice(0, maxLength) + '...';
}

console.log(formatMessage('Curious slug is coming', 20));
console.log(formatMessage('Curious slug is coming', 50));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
