import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(): Promise<Response> {
  const filePath = join(process.cwd(), "public", "forms", "discharge-authority.pdf");

  const fileBytes = await readFile(filePath);

  return new Response(fileBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="westpac-discharge-authority.pdf"',
      "Content-Length": fileBytes.byteLength.toString(),
    },
  });
}
