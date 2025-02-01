"use client";

interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit" | "reset";
  containerStyles?: string;
  handleClick: () => void;
  isActive: boolean;
}

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  isActive,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} ${
        isActive ? "bg-[#79B552]" : "hover:bg-[#79B552]"
      }`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
