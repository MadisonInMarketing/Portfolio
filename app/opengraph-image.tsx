import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Madison Drennen, Portfolio · Creative · Marketing · AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function load() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const ogDir = join(process.cwd(), "public", "og-assets");
  const brandDir = join(process.cwd(), "public", "brand", "v4");

  const [
    instrumentBold,
    instrumentReg,
    plexMedium,
    bgPastel,
    w2,
    w3,
    monogram,
  ] = await Promise.all([
    readFile(join(fontsDir, "instrument-700.ttf")),
    readFile(join(fontsDir, "instrument-500.ttf")),
    readFile(join(fontsDir, "plexmono-500.ttf")),
    readFile(join(brandDir, "bg-hero-pastel.png")),
    readFile(join(ogDir, "w2.jpg")), // Peachy HVAC
    readFile(join(ogDir, "w3.jpg")), // Social Mulli print
    readFile(join(process.cwd(), "public", "logos", "v4", "monogram-light-bg.png")),
  ]);

  const png = (buf: Buffer) =>
    `data:image/png;base64,${buf.toString("base64")}`;
  const jpg = (buf: Buffer) =>
    `data:image/jpeg;base64,${buf.toString("base64")}`;

  return {
    instrumentBold,
    instrumentReg,
    plexMedium,
    bgPastel: png(bgPastel),
    w2: jpg(w2),
    w3: jpg(w3),
    monogram: png(monogram),
  };
}

export default async function OpenGraphImage() {
  const { instrumentBold, instrumentReg, plexMedium, bgPastel, w2, w3, monogram } =
    await load();

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
        }}
      >
        {/* Actual pastel sweep bg — matches live hero */}
        <img
          src={bgPastel}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Soft brightness veil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,243,242,0.25) 0%, rgba(255,243,242,0.05) 40%, rgba(255,243,242,0.25) 100%)",
          }}
        />

        {/* ── Corner brackets ── */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 44,
            height: 44,
            borderTop: "1.5px solid rgba(37,2,9,0.4)",
            borderLeft: "1.5px solid rgba(37,2,9,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            width: 44,
            height: 44,
            borderTop: "1.5px solid rgba(37,2,9,0.4)",
            borderRight: "1.5px solid rgba(37,2,9,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 28,
            width: 44,
            height: 44,
            borderBottom: "1.5px solid rgba(37,2,9,0.4)",
            borderLeft: "1.5px solid rgba(37,2,9,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 28,
            width: 44,
            height: 44,
            borderBottom: "1.5px solid rgba(37,2,9,0.4)",
            borderRight: "1.5px solid rgba(37,2,9,0.4)",
          }}
        />

        {/* ── TOP EDITORIAL STRIP ── */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left: monogram + wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src={monogram}
              width={44}
              height={44}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(37,2,9,0.15)",
                boxShadow: "0 4px 14px rgba(37,2,9,0.1)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <div
                style={{
                  fontSize: "22px",
                  fontFamily: "Instrument Sans",
                  fontWeight: 700,
                  color: "#1A0810",
                  letterSpacing: "-0.02em",
                  display: "flex",
                }}
              >
                Madison <span style={{ color: "#BA006D", marginLeft: 6 }}>Drennen<span style={{ color: "#D4255F" }}>.</span></span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "IBM Plex Mono",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(37,2,9,0.55)",
                  marginTop: 5,
                }}
              >
                In Marketing
              </div>
            </div>
          </div>

          {/* Right: issue label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "13px",
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(37,2,9,0.65)",
            }}
          >
            <span style={{ color: "#BA006D", fontSize: 18, lineHeight: 1 }}>✦</span>
            <span>Portfolio</span>
            <span style={{ color: "rgba(37,2,9,0.25)" }}>·</span>
            <span>Issue 04</span>
            <span style={{ color: "rgba(37,2,9,0.25)" }}>·</span>
            <span>2026</span>
          </div>
        </div>

        {/* ── CENTER LOCKUP ── */}
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 176,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "165px",
              fontFamily: "Instrument Sans",
              fontWeight: 700,
              color: "#1A0810",
              lineHeight: 0.85,
              letterSpacing: "-0.055em",
              display: "flex",
            }}
          >
            Madison
          </div>
          <div
            style={{
              fontSize: "165px",
              fontFamily: "Instrument Sans",
              fontWeight: 700,
              color: "#BA006D",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              display: "flex",
            }}
          >
            Drennen<span style={{ color: "#D4255F" }}>.</span>
          </div>

          {/* Tag rail */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 36,
              fontSize: "15px",
              fontFamily: "IBM Plex Mono",
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(37,2,9,0.7)",
            }}
          >
            <span>Brand</span>
            <span style={{ color: "#BA006D" }}>·</span>
            <span>Web</span>
            <span style={{ color: "#BA006D" }}>·</span>
            <span>Marketing</span>
            <span style={{ color: "#BA006D" }}>·</span>
            <span>AI</span>
          </div>
        </div>

        {/* ── FLOATING WORK CARDS (right side) ── */}
        {/* Back: Social Mulli brand print portrait */}
        <img
          src={w3}
          width={240}
          height={300}
          style={{
            position: "absolute",
            top: 170,
            right: 90,
            width: 240,
            height: 300,
            objectFit: "cover",
            borderRadius: "16px",
            transform: "rotate(7deg)",
            boxShadow: "0 30px 70px rgba(26,8,16,0.3)",
            border: "1px solid rgba(26,8,16,0.1)",
          }}
        />
        {/* Front: Peachy HVAC web landscape */}
        <img
          src={w2}
          width={400}
          height={300}
          style={{
            position: "absolute",
            bottom: 95,
            right: 60,
            width: 400,
            height: 300,
            objectFit: "cover",
            borderRadius: "20px",
            transform: "rotate(-5deg)",
            boxShadow: "0 44px 100px rgba(26,8,16,0.4)",
            border: "1px solid rgba(186,0,109,0.35)",
          }}
        />

        {/* URL ribbon bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 72,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: "13px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(37,2,9,0.7)",
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: "#BA006D",
            }}
          />
          <span>madisondrennen.com</span>
        </div>

        {/* Small sparkle on top of front card */}
        <div
          style={{
            position: "absolute",
            bottom: 400,
            right: 62,
            fontSize: "26px",
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
