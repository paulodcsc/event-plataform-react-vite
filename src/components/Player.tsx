import { DiscordLogo, Lightning } from "phosphor-react";

export function Player() {
  return (
    <div className="flex-1">
      <div className="flex bg-black  justify-center">
        <div className="h-full w-full max-w-[1100px] max-h[60vh] aspect-video bg-rose-900"></div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Vídeo 01</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/paulodcsc.png"
                alt="Profile picture"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Paulo Capelo
                </strong>
                <span className="text-gray-200 text-sm block">
                  Dev at Vortex
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 hover:bg-green-700 transition-colors flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Me mata
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
