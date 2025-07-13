// caseyrhodes tech inc 
const axios = require("axios");
const FormData = require("form-data");
const fs = require('fs');
const os = require('os');
const path = require('path');
const { cmd } = require("../command");

cmd({
  pattern: "tourl",
  alias: ["imgtourlbb", "imgbburl", "urlbb"],
  react: '👻',
  desc: "Convert an image to a URL using imgbb.",
  category: "utility",
  use: ".tourl",
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply, sender }) => {
  try {
    const targetMessage = mek.quoted ? mek.quoted : mek;
    const mimeType = (targetMessage.msg || targetMessage).mimetype || '';

    console.log("Image mime type:", mimeType);

    if (!mimeType || !mimeType.startsWith("image")) {
      throw "🌻 Please reply to an image.";
    }

    // Download the image
    const imageBuffer = await targetMessage.download();
    const tempFilePath = path.join(os.tmpdir(), "temp_image");
    fs.writeFileSync(tempFilePath, imageBuffer);

    console.log("Temporary file saved at:", tempFilePath);
    console.log("Image size:", imageBuffer.length, "bytes");

    // Prepare form data for upload
    const form = new FormData();
    form.append("image", fs.createReadStream(tempFilePath));

    // Upload the image to imgbb
    const response = await axios.post(
      "https://api.imgbb.com/1/upload?key=b9dc9d120cc17e0d9bef7071126818e9",
      form,
      { headers: form.getHeaders() }
    );

    console.log("API Response:", response.data);

    if (!response.data || !response.data.data || !response.data.data.url) {
      throw "❌ Failed to upload the file.";
    }

    const imageUrl = response.data.data.url;

    // Delete the temporary image file
    fs.unlinkSync(tempFilePath);

    const contextInfo = {
      mentionedJid: [sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363302677217436@newsletter',
        newsletterName: "CASEYRHODES-XMD🥰",
        serverMessageId: 143
      }
    };

    // Send the URL back to the user
    await conn.sendMessage(from, {
      text: `*✅ Image Uploaded Successfully 📸*\nSize: ${imageBuffer.length} bytes\n*URL:* ${imageUrl}\n\n> ⚖️ Uploaded via CASEYRHODES-XMD`,
      contextInfo
    });

  } catch (error) {
    reply("Error: " + error);
    console.error("Error occurred:", error);https://api.imgbb.com/1/upload?key=b9dc9d120cc17e0d9bef7071126818e9
  }
});
