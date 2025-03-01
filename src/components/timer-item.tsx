type TimerItemProps = {
  value: number;
};

export default function TimerItem({ value }: TimerItemProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="text-6xl font-bold">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
  );
}
