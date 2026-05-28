import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Madison Drennen — Brand · Web · Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFonts() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const [cormorant, cormorantItalic, dmSans] = await Promise.all([
    readFile(join(fontsDir, "cormorant-300.woff")),
    readFile(join(fontsDir, "cormorant-300-italic.woff")),
    readFile(join(fontsDir, "dmsans-500.woff")),
  ]);
  return { cormorant, cormorantItalic, dmSans };
}

export default async function OpenGraphImage() {
  const { cormorant, cormorantItalic, dmSans } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#FAF9F6",
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        {/* Top-left ambient pink wash */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "rgba(255, 79, 216, 0.10)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right ambient pink wash */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-150px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "rgba(255, 79, 216, 0.08)",
            filter: "blur(90px)",
          }}
        />

        {/* ── TOP ROW ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "1px", backgroundColor: "#FF4FD8" }} />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#FF4FD8",
                fontFamily: "DM Sans",
              }}
            >
              Portfolio · 2026
            </div>
          </div>

          {/* Top right: monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#FF4FD8",
                boxShadow: "0 0 20px rgba(255,79,216,0.7)",
              }}
            />
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.55)",
                fontFamily: "DM Sans",
              }}
            >
              Available · 2026
            </div>
          </div>
        </div>

        {/* ── CENTER: HUGE WORDMARK ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            marginTop: "-20px",
          }}
        >
          <div
            style={{
              fontSize: "172px",
              fontFamily: "Cormorant",
              fontWeight: 300,
              color: "#111111",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Madison
          </div>
          <div
            style={{
              fontSize: "172px",
              fontFamily: "Cormorant",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(17,17,17,0.42)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              marginTop: "4px",
              display: "flex",
            }}
          >
            Drennen.
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Roles */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.7)",
              fontFamily: "DM Sans",
            }}
          >
            <span>Brand</span>
            <span style={{ color: "#FF4FD8" }}>·</span>
            <span>Web</span>
            <span style={{ color: "#FF4FD8" }}>·</span>
            <span>Marketing</span>
          </div>

          {/* URL / tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontFamily: "Cormorant",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(17,17,17,0.55)",
                display: "flex",
              }}
            >
              The full portfolio →
            </div>
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.32)",
                fontWeight: 500,
              }}
            >
              madison.drennen7@gmail.com
            </div>
          </div>
        </div>

        {/* Corner ticks — editorial mark */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            width: "22px",
            height: "22px",
            borderTop: "2px solid #FF4FD8",
            borderRight: "2px solid #FF4FD8",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            width: "22px",
            height: "22px",
            borderBottom: "2px solid #FF4FD8",
            borderLeft: "2px solid #FF4FD8",
            opacity: 0.45,
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
