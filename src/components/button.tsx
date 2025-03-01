interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: string;
}

export default function Button({ label, variant, onClick }: ButtonProps) {
  let color = "bg-gray-500 hover:bg-gray-600";

  switch (variant) {
    case "primary":
      color = "bg-indigo-500 hover:bg-indigo-600";
      break;
    case "danger":
      color = "bg-red-500 hover:bg-red-600";
      break;
    case "warning":
      color = "bg-yellow-500 hover:bg-yellow-600";
      break;
    case "success":
      color = "bg-green-500 hover:bg-green-600";
      break;
    default:
      color = "bg-gray-500 hover:bg-gray-600";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`px-8 capitalize font-bold text-xl hover:cursor-pointer py-2 rounded-md ${color}`}
    >
      {label}
    </button>
  );
}
