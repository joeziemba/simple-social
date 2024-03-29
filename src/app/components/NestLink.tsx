"use client";

import { useRouter } from "next/navigation";

export const NestLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const router = useRouter();

  return (
    <div
      role="button"
      onClick={(e) => {
        e.stopPropagation();
        router.push(href);
      }}
    >
      {children}
    </div>
  );
};
