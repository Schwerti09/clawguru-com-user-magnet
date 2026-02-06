import { cn } from "@/lib/utils"

export default function CTAButton({
  href,
  label,
  variant = "primary"
}: {
  href: string
  label: string
  variant?: "primary" | "outline"
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all",
        variant === "primary" &&
          "bg-gradient-to-r from-brand-orange to-brand-red hover:opacity-90 shadow-lg shadow-red-900/20",
        variant === "outline" &&
          "border border-gray-700 bg-gray-900/40 hover:bg-gray-900"
      )}
    >
      {label}
    </a>
  )
}
