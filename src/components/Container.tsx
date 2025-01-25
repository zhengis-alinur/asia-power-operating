import { HTMLAttributes, ReactNode } from "react";

const Container = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`m-auto max-w-[1200px] w-full ${props.className}`}>
      {children}
    </div>
  );
};

export default Container;
