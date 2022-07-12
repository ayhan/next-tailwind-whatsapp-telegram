import ChatCard from "./components/ChatCard";
import { chatCard, messages } from "./data";
import Messages from "./components/Messages";

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
        <main className="flex items-center justify-center h-screen">
          <div className="w-4/5 max-w-5xl rounded-md bg-telegram-gray-300 shadow-lg shadow-black/80">
            <header className="flex justify-end p-2 text-xs text-telegram-gray-100 rounded-t-md bg-telegram-gray-200">
              <div className="flex justify-around cursor-pointer w-28">
                <SvgGenerator
                  path="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  className="w-4 h-4"
                />
                <SvgGenerator
                  path="M4 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h 2 0 00-2 2z"
                  className="w-4 h-4"
                />
                <SvgGenerator path="M6 18L18 6M6 6l12 12" className="w-4 h-4" />
              </div>
            </header>
            <div className="grid grid-cols-3 chat-screen">
              <div className="col-span-1 overflow-hidden">
                <div className="flex items-center bg-telegram-gray-300 pl-2">
                  <div className="text-telegram-gray-100">
                    <SvgGenerator
                      path="M4 6h16M4 12h16M4 18h16"
                      className="w-6 h-6 m-2"
                    />
                  </div>
                  <div className="m-2 w-full">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full text-white text-xs p-2.5 rounded-sm outline-none bg-telegram-gray-200"
                    />
                  </div>
                </div>

                <div className="overflow-y-scroll h-full">
                  {chatCard.map((item, index) => (
                    <div key={index}>
                      <ChatCard data={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between col-span-2">
                <div className="flex items-center justify-between p-2 bg-telegram-gray-300">
                  <div className="flex items-center">
                    <div className="ml-2">
                      <h2 className="font-medium text-white text-sm">
                        Person Title
                      </h2>
                      <p className="text-xs text-telegram-gray-100 text-xs">last seen yesterday at 15:54</p>
                    </div>
                  </div>
                  <div className="flex justify-around w-40 text-telegram-gray-100">
                    <SvgGenerator
                      path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      className="w-5 h-5"
                    />
                    <SvgGenerator
                      path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      className="w-5 h-5"
                    />
                    <SvgGenerator
                      path="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                      className="w-5 h-5"
                    />
                    <SvgGenerator
                      path="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <div className="relative pb-3 w-full h-full overflow-y-scroll flex justify-end flex-col bg-telegram-gray-400">
                  {messages.map((item, index) => (
                    <div key={index}>
                      <Messages data={item} />
                    </div>
                  ))}
                </div>
                <div className="flex p-1 bg-telegram-gray-300">
                  <SvgGenerator
                    path="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    className="mx-2 w-7 top-2 left-2 text-telegram-gray-100"
                  />
                  <input
                    type="text"
                    placeholder="Write a message..."
                    className="w-full text-white text-xs p-2.5 rounded-md outline-none bg-telegram-gray-300"
                  />
                  <SvgGenerator
                    path="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    className="mr-1 w-9 top-2 left-2 text-telegram-gray-100"
                  />
                  <SvgGenerator
                    path="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    className="mx-2 w-8 top-2 left-2 text-telegram-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
