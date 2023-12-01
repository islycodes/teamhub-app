import TeamHubLogo from "../assets/teamhub-logo";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-[#1D1E20] flex items-center">
      <div className="flex flex-col items-center w-full">
        <div className="my-6">
          <TeamHubLogo width={200} height={200} />
        </div>
        <input
          type="email"
          id="email"
          placeholder="email@exemplo.com"
          className="rounded-md bg-[#232527] h-[40px] mt-2 w-[400px] text-[#A9A9A9] py-2 px-4 placeholder-[#4A4D50]"
        />
        <input
          type="password"
          id="password"
          placeholder="digite sua senha"
          className="rounded-md bg-[#232527] h-[40px] mt-4  w-[400px] text-[#A9A9A9] py-2 px-4 placeholder-[#4A4D50]"
        />
        <div className="flex w-[400px] justify-end">
          <div className="text-[#A9A9A9] text-sm mt-4 mr-1">
            Não possui conta?{" "}
            <span className="text-[#FAB600] font-semibold cursor-pointer">
              Cadastre-se
            </span>
          </div>
        </div>
        <div className="flex w-[400px] justify-start">
          <button className="mt-6 bg-[#A9A9A9] rounded-md py-2 px-8 text-[#1D1E20] text-sm font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}