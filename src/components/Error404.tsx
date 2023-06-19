import { Dark } from "../Types";

export default function Error404({dark}:Dark) {
  return (
    <div
      className="h-screen flex flex-col gap-5 justify-center items-center"
      style={{ backgroundColor: dark ? "#090e32" : "white" }}
    >
      <h1
        style={{ color: dark ? "white" : "#090e32" }}
        className="text-6xl font-['Satoshi'] font-bold"
      >
        404
      </h1>
      <p className="font-['Satoshi'] tracking-[-0.01em] text-[#ACB0D0]">
        Page not found
      </p>
    </div>
  );
}
