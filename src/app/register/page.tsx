import BackgroudImage from "@/assets/others/authentication.png";
import RegisterImage from "@/assets/others/authentication2.png";
import RegisterForm from "@/components/pages/register/registerForm";
import Image from "next/image";

export default function () {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroudImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className="flex h-screen items-center justify-center pt-[110px] pb-[104px]"
    >
      <main
        className="container mx-auto flex h-full w-full items-center justify-between pt-14 pr-48 pb-11 pl-25"
        style={{
          background: `url(${BackgroudImage.src}) lightgray 50% / cover no-repeat`,
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* login form */}
        <RegisterForm />

        {/* image */}
        <aside>
          <Image src={RegisterImage} alt="Register image" />
        </aside>
      </main>
    </section>
  );
}
