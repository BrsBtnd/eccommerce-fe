import { Card, CardContent } from '@mui/material';

export default function BasketSummary({
  sumPrice,
}: {
  sumPrice: number | undefined;
}) {
  return (
    <Card className="!rounded-2xl !bg-light-silver max-w-xs w-full mb-4">
      <CardContent className="!flex !justify-between items-baseline !p-2">
        <h4 className="text-lg font-medium text-dark-green">Summary:</h4>
        <span className="font-bold text-light-green">
          {sumPrice?.toFixed(2)}
        </span>
      </CardContent>
    </Card>
  );
}
