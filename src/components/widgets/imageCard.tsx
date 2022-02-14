import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type imageCardType = {
  href: string;
  srcImage: string;
  titleImage: string;
  heightImage: string;
};

export default function ImageCard({ href, srcImage, titleImage, heightImage }: imageCardType) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link href={href} passHref>
      <button
        type="button"
        className="flex flex-col justify-center items-center flex-1 h-40 opacity-80 hover:scale-110 hover:opacity-100 transition duration-150 rounded-md">
        <div
          className={`block relative w-full rounded-md overflow-hidden ${heightImage} ${
            isLoaded ? '' : 'wait-load-pulse'
          }`}>
          <Image
            layout="fill"
            className="flex-1 object-cover"
            src={srcImage}
            alt={titleImage}
            priority
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>
        <p className="text-skin-textColor" style={{ opacity: 0.8 }}>
          {titleImage}
        </p>
      </button>
    </Link>
  );
}
