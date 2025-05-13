interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-xl text-gray-500 section-description mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
    </div>
  );
} 