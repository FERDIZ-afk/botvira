exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*INFO BOT ${BotName}*
❉──────────❉
 *FROM; ${BotName}*
 *To; ${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
╔════════════════════
║ *About ${BotName}*
╠════════════════════
║️✓ *AUTHOR*: FERDIZ-afk
║️✓ *DESIGNER*: FERDIZ-afk
║✓ *editor*: FERDIZ-afk
║️✓ *device*: Realme c2
║️✓ *Alat*: *TERMUX*
║️✓ *PROGRAM*: node.js
╠════════════════════
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
