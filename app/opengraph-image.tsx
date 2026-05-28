import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Madison Drennen — Brand · Web · Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function load() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const ogDir = join(process.cwd(), "public", "og-assets");

  const [cormorant, cormorantItalic, dmSans, w1, w2, w3] = await Promise.all([
    readFile(join(fontsDir, "cormorant-300.woff")),
    readFile(join(fontsDir, "cormorant-300-italic.woff")),
    readFile(join(fontsDir, "dmsans-500.woff")),
    readFile(join(ogDir, "w1.jpg")),
    readFile(join(ogDir, "w2.jpg")),
    readFile(join(ogDir, "w3.jpg")),
  ]);

  const toDataUri = (buf: Buffer) =>
    `data:image/jpeg;base64,${buf.toString("base64")}`;

  return {
    cormorant,
    cormorantItalic,
    dmSans,
    w1: toDataUri(w1),
    w2: toDataUri(w2),
    w3: toDataUri(w3),
  };
}

export default async function OpenGraphImage() {
  const { cormorant, cormorantItalic, dmSans, w1, w2, w3 } = await load();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#111111",
          fontFamily: "DM Sans",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient pink glows */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            background: "rgba(255,79,216,0.22)",
            filter: "blur(110px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "180px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(255,79,216,0.12)",
            filter: "blur(120px)",
          }}
        />

        {/* ── LEFT: identity panel ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "520px",
            padding: "70px 0 70px 80px",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "1px", backgroundColor: "#FF4FD8" }} />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#FF4FD8",
              }}
            >
              Portfolio · 2026
            </div>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div
              style={{
                fontSize: "118px",
                fontFamily: "Cormorant",
                fontWeight: 300,
                color: "#FAF9F6",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                display: "flex",
              }}
            >
              Madison
            </div>
            <div
              style={{
                fontSize: "118px",
                fontFamily: "Cormorant",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,79,216,0.85)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                display: "flex",
              }}
            >
              Drennen.
            </div>

            {/* Roles */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "26px",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(250,249,246,0.7)",
              }}
            >
              <span>Brand</span>
              <span style={{ color: "#FF4FD8" }}>·</span>
              <span>Web</span>
              <span style={{ color: "#FF4FD8" }}>·</span>
              <span>Marketing</span>
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "15px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(250,249,246,0.4)",
              fontWeight: 500,
              marginTop: "44px",
            }}
          >
            madisondrennen.com
          </div>
        </div>

        {/* ── RIGHT: floating work cards ── */}
        <div style={{ position: "relative", flex: 1, display: "flex" }}>
          {/* Card 1 — large, tilted left */}
          <img
            src={w1}
            width={440}
            height={330}
            style={{
              position: "absolute",
              top: "96px",
              left: "40px",
              width: "440px",
              height: "330px",
              objectFit: "cover",
              borderRadius: "10px",
              transform: "rotate(-5deg)",
              boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
              border: "1px solid rgba(250,249,246,0.12)",
            }}
          />
          {/* Card 3 — brand kit, portrait, behind right */}
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
              borderRadius: "10px",
              transform: "rotate(6deg)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
              border: "1px solid rgba(250,249,246,0.12)",
            }}
          />
          {/* Card 2 — large, tilted right, front */}
          <img
            src={w2}
            width={440}
            height={330}
            style={{
              position: "absolute",
              bottom: "70px",
              right: "70px",
              width: "440px",
              height: "330px",
              objectFit: "cover",
              borderRadius: "10px",
              transform: "rotate(4deg)",
              boxShadow: "0 44px 100px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,79,216,0.3)",
            }}
          />
        </div>

        {/* Corner ticks */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "22px",
            height: "22px",
            borderTop: "2px solid rgba(255,79,216,0.6)",
            borderLeft: "2px solid rgba(255,79,216,0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            width: "22px",
            height: "22px",
            borderBottom: "2px solid rgba(255,79,216,0.6)",
            borderLeft: "2px solid rgba(255,79,216,0.6)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: cormorant, weight: 300, style: "normal" },
        { name: "Cormorant", data: cormorantItalic, weight: 300, style: "italic" },
        { name: "DM Sans", data: dmSans, weight: 500, style: "normal" },
      ],
    },
  );
}
