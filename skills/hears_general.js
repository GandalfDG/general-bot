module.exports = function(controller) {
    var titleCase = require('title-case');

    controller.hears(['[Gg]eneral \\w+', '[Mm]ajor \\w+'], 'ambient', function(bot, message) {
        msString = titleCase(message.match.toString());
        bot.reply(message, msString + "! *SALUTES*");
    });
};
