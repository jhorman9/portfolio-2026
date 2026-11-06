import { permanentRedirect } from "next/navigation";

export default function LegacyBlogDetailsPage() {
  permanentRedirect("/blog");
}
