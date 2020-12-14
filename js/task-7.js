const checkForSpam = function(message) {
    let result = message;
    const messageSplit = message.toLowerCase().split(' ');

for (const spam of messageSplit) {
    if (spam.includes('sale') || spam.includes('spam')) {
        result = 'Найден спам - сообщение удалено'
    }
}
return result;
  };

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); //true