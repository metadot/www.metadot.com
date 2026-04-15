import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getBlogPost } from "@/app/blog/utils";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  let title = "Metadot";
  let author = "Metadot";
  let date = "";

  if (slug) {
    try {
      const { blog } = await getBlogPost(slug);
      title = blog.title;
      author = blog.author || "Metadot";
      date = new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      // fallback to defaults
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#f0b93c",
                borderRadius: "4px",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#f1f5f9",
                letterSpacing: "0.05em",
              }}
            >
              METADOT
            </span>
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "42px" : "52px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{ fontSize: "20px", color: "#f0b93c", fontWeight: 600 }}
            >
              {author}
            </span>
            {date && (
              <span style={{ fontSize: "18px", color: "#94a3b8" }}>{date}</span>
            )}
          </div>
          <span style={{ fontSize: "16px", color: "#64748b" }}>
            www.metadot.com
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
