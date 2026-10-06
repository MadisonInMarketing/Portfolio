import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Madison in Marketing — Creative · Marketing · AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function load() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const ogDir = join(process.cwd(), "public", "og-assets");

  const [instrumentBold, instrumentReg, plexMedium, w1, w2, w3] = await Promise.all([
    readFile(join(fontsDir, "instrument-700.ttf")),
    readFile(join(fontsDir, "instrument-500.ttf")),
    readFile(join(fontsDir, "plexmono-500.ttf")),
    readFile(join(ogDir, "w1.jpg")),
    readFile(join(ogDir, "w2.jpg")),
    readFile(join(ogDir, "w3.jpg")),
  ]);

  const toDataUri = (buf: Buffer) =>
    `data:image/jpeg;base64,${buf.toString("base64")}`;

  return {
    instrumentBold,
    instrumentReg,
    plexMedium,
    w1: toDataUri(w1),
    w2: toDataUri(w2),
    w3: toDataUri(w3),
  };
}

export default async function OpenGraphImage() {
  const { instrumentBold, instrumentReg, plexMedium, w1, w2, w3 } = await load();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FDF8F4",
          fontFamily: "Instrument Sans",
          position: "relative",
          overflow: "hidden",
          // Chrome gradient backdrop
          backgroundImage:
            "linear-gradient(135deg, rgba(253,248,244,0.3) 0%, rgba(220,215,213,0.65) 18%, rgba(245,240,236,1) 36%, rgba(253,250,247,1) 50%, rgba(235,228,224,0.9) 68%, rgba(205,198,195,0.75) 82%, rgba(248,243,240,1) 100%)",
        }}
      >
        {/* Pink gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,37,95,0.55) 0%, rgba(229,90,137,0.3) 40%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,37,95,0.4) 0%, rgba(255,207,226,0.2) 50%, transparent 75%)",
            filter: "blur(110px)",
          }}
        />

        {/* ── LEFT: identity panel ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "580px",
            padding: "70px 0 70px 80px",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "1px", backgroundColor: "#D4255F" }} />
            <div
              style={{
                fontSize: "15px",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#D4255F",
              }}
            >
              Portfolio · 2026
            </div>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div
              style={{
                fontSize: "128px",
                fontFamily: "Instrument Sans",
                fontWeight: 700,
                color: "#1A0810",
                lineHeight: 0.86,
                letterSpacing: "-0.045em",
                display: "flex",
              }}
            >
              madison<span style={{ color: "#D4255F" }}>.</span>
            </div>
            <div
              style={{
                fontSize: "128px",
                fontFamily: "Instrument Sans",
                fontWeight: 700,
                color: "#BA006D",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
                display: "flex",
              }}
            >
              in marketing<span style={{ color: "#D4255F" }}>.</span>
            </div>

            {/* Roles */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "28px",
                fontSize: "15px",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#5C4049",
              }}
            >
              <span>Creative</span>
              <span style={{ color: "#D4255F" }}>·</span>
              <span>Marketing</span>
              <span style={{ color: "#D4255F" }}>·</span>
              <span>AI</span>
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "14px",
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#5C4049",
              marginTop: "44px",
            }}
          >
            madisondrennen.com
          </div>
        </div>

        {/* ── RIGHT: floating work cards ── */}
        <div style={{ position: "relative", flex: 1, display: "flex" }}>
          <img
            src={w1}
            width={440}
            height={330}
            style={{
              position: "absolute",
              top: "96px",
              left: "20px",
              width: "440px",
              height: "330px",
              objectFit: "cover",
              borderRadius: "22px",
              transform: "rotate(-5deg)",
              boxShadow: "0 40px 90px rgba(26,8,16,0.22)",
              border: "1px solid rgba(26,8,16,0.08)",
            }}
          />
          <img
            src={w3}
            width={250}
            height={312}
            style={{
              position: "absolute",
              top: "40px",
              right: "30px",
              width: "250px",
              height: "312px",
              objectFit: "cover",
              borderRadius: "22px",
              transform: "rotate(6deg)",
              boxShadow: "0 30px 70px rgba(26,8,16,0.2)",
              border: "1px solid rgba(26,8,16,0.08)",
            }}
          />
          <img
            src={w2}
            width={440}
            height={330}
            style={{
              position: "absolute",
              bottom: "70px",
              right: "60px",
              width: "440px",
              height: "330px",
              objectFit: "cover",
              borderRadius: "22px",
              transform: "rotate(4deg)",
              boxShadow: "0 44px 100px rgba(26,8,16,0.26)",
              border: "1px solid rgba(212,37,95,0.3)",
            }}
          />
        </div>

        {/* Sparkle */}
        <div
          style={{
            position: "absolute",
            top: "44px",
            right: "60px",
            fontSize: "30px",
            color: "#D4255F",
          }}
        >
          ✦
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Sans", data: instrumentBold, weight: 700, style: "normal" },
        { name: "Instrument Sans", data: instrumentReg, weight: 500, style: "normal" },
        { name: "IBM Plex Mono", data: plexMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
