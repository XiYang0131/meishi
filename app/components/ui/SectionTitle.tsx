interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div className="section-divider"></div>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
        {subtitle}
      </p>
    </div>
  );
} 