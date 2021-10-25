type RandomNumberType= {
  value: number;
};

type PositiveType = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}
type NegativeType = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
}
type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
}
type RandomNumberProps = PositiveType | NegativeType | Zero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
