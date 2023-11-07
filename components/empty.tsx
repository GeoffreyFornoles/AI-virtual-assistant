import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="empty" fill src={"/empty.png"}></Image>
      </div>
      <p className="text-muted-foreground text-sm text-center"></p>
    </div>
  );
};

export default Empty;
