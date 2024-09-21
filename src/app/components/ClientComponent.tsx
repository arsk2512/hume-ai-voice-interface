// ./components/ClientComponent.tsx
"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Controls";
import Controls from "./Messages";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }}>
      <main className="h-screen w-full flex justify-center py-5">
        <div className="relative w-[800px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center align-center p-5">
          <Messages />
          <Controls />
        </div>
      </main>
    </VoiceProvider>
  );
}
