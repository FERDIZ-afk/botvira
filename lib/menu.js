exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
  Berikut beberapa fitut pada bot ${BotName}
❉──────────❉
         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *.sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *.yt* <linkyoutube>
║│3. *.ig* <linkIg>
║│4. *.fb* <linkFb>
║│5. *.twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks>
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama anda>
║│6. *.pasangan* <putra & vira>
║│7. *.lirik* <nama lagu>
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
║│1. *.creator*
║│2. *.owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *.info*
║│2. *.donasi*
║│3. *.github bot*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.tts* <teks>
║│2. *.quotes*
║│3. *.donasi*
║│4. *.pict cewek*
║│5. *.pict cowok*
║│6. *.pokemon*
║│7. *.loli*
║│8. *.animepict*
║│9. *.alay*  <teks>
║│10. *.say*  <teks>
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
║ *MADE BY Ferdiz-afk*
╚════════════════════`
}
