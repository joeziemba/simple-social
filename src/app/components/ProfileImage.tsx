import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export interface ProfileImageProps extends Omit<ImageProps, "alt"> {
  size?: "small" | "default";
}

export const ProfileImage = ({
  src,
  width,
  height,
  size = "default",
}: ProfileImageProps) => {
  return (
    <div
      className={clsx("rounded-full border-solid border-zinc-800 shadow-lg", {
        "border-2": size === "default",
        border: size === "small",
      })}
    >
      <div className="rounded-full border border-solid border-zinc-100 overflow-hidden">
        <Image src={src} alt="profile photo" width={width} height={height} />
      </div>
    </div>
  );
};
