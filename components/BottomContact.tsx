import Button from "./Button";

export default function BottomContact({
  title = "",
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 gap-6 w-full bg-blue-light ${className} text-center`}
    >
      <h3>{title}</h3>
      <h4 style={{ fontWeight: "normal" }} className="mb-6">
        Skontaktuj się z naszymi specjalistami, którzy pomogą dobrać idealną
        folię dla Twoich potrzeb.
      </h4>
      <Button
        text="Skontaktuj się"
        primaryColor="#333333"
        backgroundColor="#ffffff"
        href="/kontakt"
      />
    </div>
  );
}
