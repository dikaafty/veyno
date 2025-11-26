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
      
    </article>
  );
};

export default CashflowInsightsCard;
