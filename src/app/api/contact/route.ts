import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, projectScope, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "d2c686fa-072b-462d-966b-02cdf2447f22";

    // 1. Dispatch Email via Web3Forms
    const emailPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio Inquiry] ${subject || "New Message"} (${projectScope || "General"})`,
        domain: projectScope,
        message,
        from_name: name,
      }),
    }).catch((err) => {
      console.error("Web3Forms email error:", err);
      return null;
    });

    // 2. Dispatch Push Alert to Discord Webhook
    const discordWebhookUrl =
      process.env.DISCORD_WEBHOOK_URL ||
      "https://discord.com/api/webhooks/1565275951665778798/j2x5DhcArFLxrgxMQzBxHNDTTsWeX7TEECtxdkF-lza3vd3iMOhquMBVeDWgLVdfo0jl";
    let discordPromise: Promise<Response | null> = Promise.resolve(null);

    if (discordWebhookUrl) {
      // Emerald Green color in decimal: #10B981 -> 1095977
      const discordPayload = {
        username: "Praveen Portfolio Ingestion",
        avatar_url: "https://raw.githubusercontent.com/PraveenBen/portfolio2.0/main/public/file.svg",
        embeds: [
          {
            title: "⚡ New Portfolio Ingestion Alert",
            description: "A visitor has dispatched a message through your portfolio contact terminal.",
            color: 1095977, // #10B981
            fields: [
              {
                name: "👤 Sender Name",
                value: `**${name}**`,
                inline: true,
              },
              {
                name: "📧 Email",
                value: `\`${email}\``,
                inline: true,
              },
              {
                name: "🛠 Domain Scope",
                value: projectScope || "General Inquiry",
                inline: true,
              },
              {
                name: "📌 Subject",
                value: subject || "No Subject Provided",
                inline: false,
              },
              {
                name: "💬 Message Payload",
                value: message.length > 1000 ? `${message.slice(0, 1000)}...` : message,
                inline: false,
              },
            ],
            footer: {
              text: "Praveen T • Portfolio 2.0 Ingestion Pipeline",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      discordPromise = fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      }).catch((err) => {
        console.error("Discord webhook dispatch error:", err);
        return null;
      });
    }

    // Wait for both dispatches
    const [emailRes] = await Promise.all([emailPromise, discordPromise]);

    if (emailRes) {
      const emailData = await emailRes.json();
      if (!emailData.success) {
        return NextResponse.json(
          {
            success: false,
            message: emailData.message || "Failed to deliver message.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Message dispatched and routed successfully to email and Discord.",
    });
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during dispatch." },
      { status: 500 }
    );
  }
}
