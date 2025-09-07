"use client";
import { Image as KitImage } from "@imagekit/next";
type ImageType = {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  tr?:boolean
};
const endpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT || "";
export default function Image({ src, alt, w, h, className, tr }: ImageType) {
  // Build transformation array for ImageKit to actually resize the image
  const transformation = [];
  if (w && h) {
    transformation.push({ width: w.toString(), height: h.toString() });
  } else if (w) {
    transformation.push({ width: w.toString() });
  } else if (h) {
    transformation.push({ height: h.toString() });
  }

  return (
    <KitImage
      urlEndpoint={endpoint}
      src={src}
      alt={alt}
      width={w}
      height={h}
      transformation={tr ? transformation : undefined}
      className={className}
    />
  );
}
