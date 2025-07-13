const fetch = require("node-fetch");
const { cmd } = require("../command");

cmd({
  pattern: "tiktok",
  alias: ["tiktoks", "tiks"],
  desc: "Search for TikTok videos using a query.",
  react: '✅',
  category: 'tools',
  filename: __filename
}, async (conn, m, store, {
  from,
  args,
  reply
}) => {
  if (!args[0]) {
    return reply("🌸 What do you want to search on TikTok?\n\n*Usage Example:*\n.tiktoksearch <query>");
  }

  const query = args.join(" ");
  await store.react('⌛');

  try {
    reply(`🔎 Searching TikTok for: *${query}*`);
    
    const response = await fetch(`https://api.diioffc.web.id/api/search/tiktok?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (!data || !data.status || !data.result || data.result.length === 0) {
      await store.react('❌');
      return reply("❌ No results found for your query. Please try with a different keyword.");
    }

    // Get up to 7 random results
    const results = data.result.slice(0, 7).sort(() => Math.random() - 0.5);

    for (const video of results) {
      const message = `🌸 *TikTok Video Result*:\n\n`
        + `*• Title*: ${video.title}\n`
        + `*• Author*: ${video.author.name || 'Unknown'} (@${video.author.username})\n`
        + `*• Duration*: ${video.duration}s\n`
        + `*• Plays*: ${video.stats.play}\n`
        + `*• Likes*: ${video.stats.like}\n`
        + `*• URL*: https://www.tiktok.com/@${video.author.username}/video/${video.video_id}\n\n`;

      if (video.media.no_watermark) {
        await conn.sendMessage(from, {
          video: { url: video.media.no_watermark }, 
          caption: message
        }, { quoted: m });
      } else {
        reply(`❌ Failed to retrieve video for *"${video.title}"*.`);
      }
    }

    await store.react('✅');
  } catch (error) {
    console.error("Error in TikTokSearch command:", error);
    await store.react('❌');
    reply("❌ An error occurred while searching TikTok. Please try again later.");
  }
});
