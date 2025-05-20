import Button from "@/components/Button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <h1 className="mt-24">Witamy Państwa na naszej stronie</h1>
      <h2 className="mt-16 max-w-[1030px] text-center">
        Zajmujemy się montażem folii okiennych nie tylko na terenie Krakowa, ale
        również w&nbsp;całym województwie małopolskim i&nbsp;śląskim
      </h2>
      <Button
        text="Poznaj naszą ofertę"
        primaryColor="#003d66"
        backgroundColor="#d0ebff"
        href="/folie-okienne"
        className="mt-8"
      />
    </div>
  );
}
