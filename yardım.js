const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send('**YARDIM MENÜSÜ**'
        '**<> ve [] Sadece Örnek Verebilmek Amacıyla Konmuştur. Komut Yazarken Onları Kullanmaınız'
        'pr:reklam-yap <link> : Attığınız Linkle Reklam Yapar'
        'pr:reklam-kaldýr <mesajID> : Reklamı Kaldırır (Sadece **Kurucu ve Reklam Görevlisi** Yapabilir'
        'pr:reload : Botu Reloadlar'    );
    message.delete();
    const mesajat = new Discord.RichEmbed()
        .setColor('176d68')
        .setDescription('**' + mesaj + '**')
