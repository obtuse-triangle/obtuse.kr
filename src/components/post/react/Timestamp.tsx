import type Article from "@interfaces/article";
type Props = {
  updatedAt: Article["attributes"]["updatedAt"];
};

export default function Timestamp({ updatedAt }: Props) {
  return (
    <span className="text-gray-400 font-thin">
      {updatedAt.split("T")[0] + " " + updatedAt.split("T")[1].split(".")[0]}
    </span>
  );
}
