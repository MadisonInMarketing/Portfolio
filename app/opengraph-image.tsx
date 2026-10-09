import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Madison Drennen, Portfolio · Creative · Marketing · AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function load() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const ogDir = join(process.cwd(), "public", "og-assets");

  const [instrumentBold, instrumentReg, plexMedium, w2, w3] = await Promise.all([
    readFile(join(fontsDir, "instrument-700.ttf")),
    readFile(join(fontsDir, "instrument-500.ttf")),
    readFile(join(fontsDir, "plexmono-500.ttf")),
    readFile(join(ogDir, "w2.jpg")), // Peachy HVAC web mockup
    readFile(join(ogDir, "w3.jpg")), // Social Mulli brand print
  ]);

  const toDataUri = (buf: Buffer, mime = "image/jpeg") =>
    `data:${mime};base64,${buf.toString("base64")}`;

  return {
    instrumentBold,
    instrumentReg,
    plexMedium,
    w2: toDataUri(w2),
    w3: toDataUri(w3),
  };
}

export default async function OpenGraphImage() {
  const { instrumentBold, instrumentReg, plexMedium, w2, w3 } = await load();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FFF3F2",
          fontFamily: "Instrument Sans",
          position: "relative",
          overflow: "hidden",
          // Pastel pink + icy blue silky sweeps on paper-white, mimics live hero
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 15% 15%, rgba(224,90,159,0.42) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 88% 85%, rgba(224,90,159,0.5) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 50% 50%, rgba(217,234,254,0.65) 0%, transparent 70%), linear-gradient(135deg, #FFF3F2 0%, #FFE4EF 50%, #FFF3F2 100%)",
        }}
      >
        {/* ── Corner brackets, mirrors the live hero ── */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            width: 36,
            height: 36,
            borderTop: "1px solid rgba(37,2,9,0.3)",
            borderLeft: "1px solid rgba(37,2,9,0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            width: 36,
            height: 36,
            borderTop: "1px solid rgba(37,2,9,0.3)",
            borderRight: "1px solid rgba(37,2,9,0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            width: 36,
            height: 36,
            borderBottom: "1px solid rgba(37,2,9,0.3)",
            borderLeft: "1px solid rgba(37,2,9,0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 36,
            height: 36,
            borderBottom: "1px solid rgba(37,2,9,0.3)",
            borderRight: "1px solid rgba(37,2,9,0.3)",
          }}
        />

        {/* ── LEFT: identity panel ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "600px",
            padding: "72px 0 72px 72px",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ fontSize: "22px", color: "#BA006D", lineHeight: 1 }}>✦</div>
            <div
              style={{
                fontSize: "15px",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(37,2,9,0.75)",
              }}
            >
              Madison in Marketing
            </div>
            <div
              style={{
                fontSize: "14px",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(37,2,9,0.45)",
                marginLeft: 4,
              }}
            >
              · Issue 04
            </div>
          </div>

          {/* Name lockup */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div
              style={{
                fontSize: "128px",
                fontFamily: "Instrument Sans",
                fontWeight: 700,
                color: "#1A0810",
                lineHeight: 0.86,
                letterSpacing: "-0.05em",
                display: "flex",
              }}
            >
              Madison
            </div>
            <div
              style={{
                fontSize: "128px",
                fontFamily: "Instrument Sans",
                fontWeight: 700,
                color: "#BA006D",
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
                display: "flex",
              }}
            >
              Drennen<span style={{ color: "#D4255F" }}>.</span>
            </div>

            {/* Roles */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "26px",
                fontSize: "15px",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(37,2,9,0.65)",
              }}
            >
              <span>Creative</span>
              <span style={{ color: "#BA006D" }}>·</span>
              <span>Marketing</span>
              <span style={{ color: "#BA006D" }}>·</span>
              <span>AI</span>
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "14px",
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(37,2,9,0.55)",
              marginTop: "44px",
            }}
          >
            madisondrennen.com
          </div>
        </div>

        {/* ── RIGHT: floating work cards ── */}
        <div style={{ position: "relative", flex: 1, display: "flex" }}>
          {/* Back card: Social Mulli brand print (portrait) */}
          <img
            src={w3}
            width={255}
            height={320}
            style={{
              position: "absolute",
              top: 70,
              right: 56,
              width: 255,
              height: 320,
              objectFit: "cover",
              borderRadius: "18px",
              transform: "rotate(6deg)",
              boxShadow: "0 30px 70px rgba(26,8,16,0.22)",
              border: "1px solid rgba(26,8,16,0.08)",
            }}
          />
          {/* Front card: Peachy HVAC web mockup (landscape) */}
          <img
            src={w2}
            width={440}
            height={330}
            style={{
              position: "absolute",
              bottom: 80,
              right: 46,
              width: 440,
              height: 330,
              objectFit: "cover",
              borderRadius: "22px",
              transform: "rotate(-4deg)",
              boxShadow: "0 44px 100px rgba(26,8,16,0.3)",
              border: "1px solid rgba(186,0,109,0.3)",
            }}
          />

          {/* Small sparkle accent */}
          <div
            style={{
              position: "absolute",
              top: 56,
              right: 40,
              fontSize: "30px",
              color: "#D4255F",
            }}
          >
            ✦
          </div>
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
