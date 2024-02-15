const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'biriyirmiiki.aternos.me', // minecraft server ip
  username: 'nauw', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
  auth: 'offline',
  port: 18911,
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

async function runRconCommand(user_text) {
    bot.chat(user_text)
}

// Export the function to make it accessible from other files
module.exports = { runRconCommand };
