// Script Gratis Jangan Dj Jual

// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6283846677065']  
global.mods = ['6283846677065'] 
global.prems = ['6283846677065']
global.nameowner = 'ɠҽɳɠʂƚσɾҽ'
global.numberowner = '6283846677065' 
global.mail = 'segengelek@gmail.com' 
global.dana = '6283846677065'
global.pulsa = '6283846677065'
global.gopay = '-'
global.namebot = 'ᴳᵉⁿᵍᴮᵒᵗᶻᶻˣ•ᴹᵈ'
global.gc = 'https://chat.whatsapp.com/CO4USbDLEte2GzCN2GH7aJ'
global.web = 'http://webgengstore.rf.gd/?i=1'
global.instagram = 'https://instagram.com/geng_store12'
global.wm = 'ᴳᵉⁿᵍᴮᵒᵗᶻᶻˣ•ᴹᵈ'
global.watermark = wm
global.wm2 = '⫹⫺ ᴳᵉⁿᵍᴮᵒᵗᶻᶻˣ•ᴹᵈ'
global.wm3 = '© ᴳᵉⁿᵍᴮᵒᵗᶻᶻˣ•ᴹᵈ'
global.wm4 = 'made by ᴳᵉⁿᵍᴮᵒᵗᶻᶻˣ•ᴹᵈ'
global.wait = '_*Tunggu Tod sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'ɠҽɳɠʂƚσɾҽ'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/0a2bbe5ced60966f919ba.jpg'

//===> Apikey
global.lann = 'UEGidY88' //isi apikey mu https://api.betabotz.org
global.btc = 'OiWYUqjm'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'UEGidY88' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
