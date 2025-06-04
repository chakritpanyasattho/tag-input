"use client";
import { useState } from "react";
import TagInput from "@/components/TagInput";

export default function Home() {
  const [basicTags, setBasicTags] = useState<string[]>([]);

  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tag Input UI
            </h1>
          </div>
          <section className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h2>

            <TagInput
              placeholder="Add your tags here..."
              onChange={setBasicTags}
              maxTags={5}
              className="mb-4"
            />

            <div className="text-sm text-gray-500 mt-2">
              Tags: {basicTags.length}/5
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
