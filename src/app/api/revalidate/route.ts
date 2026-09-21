import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by a Storyblok webhook (Settings -> Webhooks -> "Story published" /
// "Story unpublished") whenever content changes, so the cached production site
// reflects new content without waiting for a redeploy.
//
// URL: https://<your-domain>/api/revalidate?secret=<STORYBLOK_REVALIDATE_SECRET>
async function handleRevalidate(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.STORYBLOK_REVALIDATE_SECRET || secret !== process.env.STORYBLOK_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid or missing secret" }, { status: 401 });
  }

  // Blanket revalidation: simplest, safe default for a site this size. Every
  // story published/unpublished in Storyblok busts the whole app's cache.
  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}

// Storyblok webhooks send POST, but GET is supported too so this can be tested
// by just visiting the URL in a browser.
export async function GET(request: NextRequest) {
  return handleRevalidate(request);
}
