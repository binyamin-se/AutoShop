"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-midGray/40 px-4 py-2 text-sm font-semibold text-charcoal hover:border-autoRed hover:text-autoRed"
    >
      Print Specials
    </button>
  );
}

