import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { mkdirSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

export const generateTreeFile = createServerFn({
  method: "POST",
})
  .inputValidator(
    z.object({
      path: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    try {
      console.log("=================================");
      console.log("generateTreeFile chamado");
      console.log("Path recebido:", data.path);

      const IGNORE = new Set([
        "node_modules",
        ".git",
        ".tanstack",
        ".lovable",
        "dist",
        "build",
      ]);

      function walk(dir: string, prefix = ""): string[] {
        const entries = readdirSync(dir, {
          withFileTypes: true,
        })
          .filter((entry) => !IGNORE.has(entry.name))
          .sort((a, b) => {
            if (a.isDirectory() && !b.isDirectory()) return -1;
            if (!a.isDirectory() && b.isDirectory()) return 1;
            return a.name.localeCompare(b.name);
          });

        const lines: string[] = [];

        entries.forEach((entry, index) => {
          const isLast = index === entries.length - 1;

          lines.push(
            `${prefix}${isLast ? "└── " : "├── "}${entry.name}`,
          );

          if (entry.isDirectory()) {
            lines.push(
              ...walk(
                join(dir, entry.name),
                prefix + (isLast ? "    " : "│   "),
              ),
            );
          }
        });

        return lines;
      }

      const rootName =
        data.path.split(/[\\/]/).pop() ?? data.path;

      const tree = [
        rootName,
        ...walk(data.path),
      ].join("\n");

      const outputFolder = join(
        data.path,
        ".code-context",
      );

      mkdirSync(outputFolder, {
        recursive: true,
      });

      const outputFile = join(
        outputFolder,
        "tree.txt",
      );

      writeFileSync(
        outputFile,
        tree,
        "utf-8",
      );

      console.log("Arquivo salvo:");
      console.log(outputFile);

      return {
        success: true,
        outputFile,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });