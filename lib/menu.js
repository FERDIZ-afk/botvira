exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
❉──────────❉
 *FROM; ${BotName}*
 *To; ${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉
*HALLO kak*
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
╔════════════════════
║ 🍁*FITUR BOT ${BotName}*🍁
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *.sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *.ytmp3* <linkyoutube>
║│2. *.ytmp4* <linkyoutube>
║│3. *.tiktok* <linktiktok>
║│4. *.ig* <linkIg>
║│5. *.fb* <linkFb>
║│6. *.twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks>
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama anda>
║│6. *.pasangan* <FERZA & vira>
║│7. *.lirik* <nama lagu>
║│8. *.cerpen*
║│9. *.puisi1*
║│10. *.puisi2*
║│11. *.bucin*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *.sholat* <daerah>
║│2. *.covid*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *.cek* (cek nomor kamu)
║│2. *.creator*
║│3. *.owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *.info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.tts*<teks>///ERROR
║│2. *.quotes*
║│3. *.donasi*
║│4. *.pict cewek*
║│5. *.pict cowok*
║│6. *.pokemon*
║│7. *.loli*
║│8. *.animepict*
║│9. *.alay*  <teks>
║│10. *.say*  <teks>
║│11. *.infoig*// ERROR
║│12. *.bitly* <link>
║│13. *.filmanime* <nama anime>
║│14. *.infoanime* <nama anime>
║│15. *.cersex*
║│16. *.indohot*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY FERDIZ-afk*
╚════════════════════`
}
