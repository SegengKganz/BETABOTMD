let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 2023000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `*This bot was created by me with the purpose of learning and having fun and not intending to harm others.*

*want to buy source code? please chat owner*
@${creator.split("@")[0]}

© GengStore`,
          contextInfo: {
            mentionedJid: [creator],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler