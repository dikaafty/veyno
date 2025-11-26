import { LucideIcon } from "lucide-react";
import { SFProDisplaySemiBold } from "@/lib/fonts";

type CashflowInsightsCardProps = {
  title: string;
  Icon: LucideIcon;
  description: string;
  score: number | null;
};

const CashflowInsightsCard = ({
  title,
  Icon,
  description,
  score,
}: CashflowInsightsCardProps) => {
  return (
    <article className="bg-background/50 rounded-2xl p-3 flex-center gap-3">
      <Icon
        className={`${
          title.includes("Revenue")
            ? "text-tertiary-card-background"
            : title.includes("Expenses")
            ? "text-secondary-card-background"
            : "text-yellow-300"
        }`}
      />

      <div className="flex flex-col flex-1">
        <p className="text-sm">{description}</p>

        {score && (
          
        )}
      </div>
    </article>
  );
};

export default CashflowInsightsCard;
