type TimerItemProps = {
  value: number;
  onChange?: (e: any) => void;
  type: "span" | "input";
};

export default function TimerItem({ value, onChange, type }: TimerItemProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {type == "input" ? (
        <input
          type="text"
          className="text-4xl font-bold w-20 rounded-md text-center"
          value={value}
          onChange={onChange}
        />
      ) : (
        <span className="text-4xl font-bold w-20 rounded-md text-center">
          {value}
        </span>
      )}
    </div>
  );
}
