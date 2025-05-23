import Image from 'next/image';
import Link from 'next/link';

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  testimonial?: string;
  learnMoreUrl: string;
  reverseLayout?: boolean;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  testimonial,
  learnMoreUrl,
  reverseLayout = false,
}) => {
  const textContainer = (
    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 bg-gray-800 text-white">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h3>
      <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
        {description.split('\n').map((line, index) => <span key={index}>{line}<br/></span>)}
      </p>
      {testimonial && (
        <blockquote className="italic text-md md:text-lg border-l-4 border-blue-500 pl-4 mb-8">
          &ldquo;{testimonial}&rdquo;
        </blockquote>
      )}
      <Link href={learnMoreUrl} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 self-start md:self-auto">
        Ler mais
      </Link>
    </div>
  );

  const imageContainer = (
    <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
      <Image
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
      {reverseLayout ? (
        <>
          {textContainer}
          {imageContainer}
        </>
      ) : (
        <>
          {imageContainer}
          {textContainer}
        </>
      )}
    </div>
  );
};

export default ServiceCategoryCard; 