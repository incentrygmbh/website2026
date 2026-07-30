import type { Metadata } from "next";
import FormatPageTemplate from "@/components/sections/format/FormatPageTemplate";
import { formatPages } from "@/content/formats";

const data = formatPages["team-events"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <FormatPageTemplate data={data} />;
}
