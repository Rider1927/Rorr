//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
require("./all/module")
global.owner = "62858593086419" 
global.namaCreator = "LynnZxD" 
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'
global.codeInvite = ""
global.isLink = 'wa.me/62858593086419' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOT BUG" 
global.author = "BY JONO" 
global.jumlah = "5" 
global.namabot = "BOT" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})