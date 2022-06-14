/* This example requires Tailwind CSS v2.0+ */
import Header from "components/Header";
import ChatCard from "./components/ChatCard";
import { chatCard } from "./data";

export default function Chat() {
  const SvgGenerator = (props) => {
    const { path, className } = props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <>
      <div className="h-screen">
        <Header currentPage="Whatsapp" />
        <main className="flex items-center justify-center h-screen">
          <div className="w-4/5 max-w-5xl rounded-md h-3/5 max-h-3/5 bg-wp-secondary-200">
            <header className="flex justify-between p-2 text-xs text-wp-white-200 rounded-t-md bg-wp-primary">
              <div className="font-bold cursor-default">Whatsapp</div>
              <div className="flex justify-around cursor-pointer w-28">
                <SvgGenerator
                  path="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  className="w-4 h-4"
                />
                <SvgGenerator
                  path="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  className="w-4 h-4"
                />
                <SvgGenerator path="M6 18L18 6M6 6l12 12" className="w-4 h-4" />
              </div>
            </header>
            <div className="grid h-full grid-cols-3">
              <div className="col-span-1 overflow-hidden">
                <div className="border-r border-wp-secondary-100">
                  <div className="flex items-center justify-between bg-wp-secondary-100">
                    <div>
                      <img
                        className="w-10 m-2 rounded-full"
                        alt="profile picture"
                        src="https://via.placeholder.com/50"
                      />
                    </div>
                    <div className="flex justify-around w-28 text-wp-white-200">
                      <SvgGenerator
                        path="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        className="w-6 h-6"
                      />
                      <SvgGenerator path="M12 4v16m8-8H4" className="w-6 h-6" />
                      <SvgGenerator
                        path="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="border-b border-wp-secondary-100">
                    <div className="relative m-2">
                      <SvgGenerator
                        path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        className="absolute w-5 h-5 top-2 left-2 text-wp-white-200"
                      />
                      <input
                        type="text"
                        placeholder="Aratın veya yeni sohbet başlatın"
                        className="w-full text-wp-white-100 text-xs pl-12 p-2.5 rounded-md outline-none bg-wp-secondary-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-y-scroll chat-list border-wp-secondary-100 h-4/5">
                  {chatCard.map((item, index) => (
                    <div key={index}>
                      <ChatCard data={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between p-2 bg-wp-secondary-100">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="profile picture"
                      src="https://via.placeholder.com/50"
                    />
                    <div className="ml-2">
                      <h2 className="font-medium text-wp-white-100">
                        Person Title
                      </h2>
                      <p className="text-xs text-wp-white-200">Description</p>
                    </div>
                  </div>
                  <div className="flex justify-around w-72">
                  <SvgGenerator
                        path="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        className="w-6 h-6 text-wp-white-200"
                      />
                    <SvgGenerator
                        path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        className="w-6 h-6 text-wp-white-200"
                      />
                    <SvgGenerator
                        path="M40 12H0.2"
                        className="w-6 h-6 rotate-90 text-wp-white-200"
                      />
                    <SvgGenerator
                        path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        className="w-6 h-6 ml-3 text-wp-white-200"
                      />
                    <SvgGenerator
                        path="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        className="w-6 h-6 text-wp-white-200"
                      />
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <div
                    className="absolute top-0 w-full h-full bg-center bg-auto opacity-10"
                    style={{ "background-image": "url(/img/chat-bg.png)" }}
                  ></div>

                  <div className="text-white">
                    <p>Test</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
