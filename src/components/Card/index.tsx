import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
  content: string;
}

export default function Card({ title, subtitle, content, icon }: CardProps) {
  return (
    <div className="tablet:h-268 tablet:w-280 mobile:h-full mobile:w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div>
          <Image
            src={`/icon/${icon}.svg`}
            width={64}
            height={64}
            alt="Solutions"
          />
          <div className="text-xl text-orange-edusync font-bold mb-2">
            {title}
          </div>
          <div className="text-2xl text-base-edusync mb-4 font-bold">
            {subtitle}
          </div>
          <div className="text-sm text-base-edusync pr-10">{content}</div>
        </div>
      </div>
    </div>
  );
}
