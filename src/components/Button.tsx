export default function Button({ text }: { text: string }) {
  return (
    <button className="border-2 border-blue-300 text-white text-xs font-semibold tracking-[100%] p-4 py-2 rounded-full">
      {text}
    </button>
  );
}
