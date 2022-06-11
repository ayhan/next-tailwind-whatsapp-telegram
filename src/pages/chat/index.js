/* This example requires Tailwind CSS v2.0+ */
import Header from "components/Header";
import ChatCard from "./components/ChatCard";

const chatCard = [
  {
    image: "https://via.placeholder.com/50",
    name: "Jhon Doe",
    lastMessage: "Lorem Ipsum dolor sit Amet",
    date: "14.05.2022",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Jhon Doe",
    lastMessage: "Lorem Ipsum dolor sit Amet",
    date: "14.05.2022",
  },
  {
    image: "https://via.placeholder.com/50",
    name: "Jhon Doea",
    lastMessage: "Lorem Ipsum dolor sit Amet",
    date: "14.05.2022",
  },
];

export default function Chat() {
  return (
    <>
      <div className="h-screen">
        <Header currentPage="Whatsapp" />
        <main className="flex items-center justify-center h-screen">
          <div className="w-4/5 max-w-5xl rounded-md h-4/5 bg-wp-secondary-200">
            <header className="flex justify-between p-2 text-xs text-wp-white-200 rounded-t-md bg-wp-primary">
              <div className="font-bold cursor-default">Whatsapp</div>
              <div className="flex justify-around cursor-pointer w-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </header>
            <div className="grid grid-cols-3 text-white divide-wp-white-200">
              <div className="col-span-1 border-r border-wp-secondary-100">
                <div className="flex items-center justify-between bg-wp-secondary-100">
                  <div>
                    <img
                      className="w-10 m-2 rounded-full"
                      alt="profile picture"
                      src="https://via.placeholder.com/50"
                    />
                  </div>
                  <div className="flex justify-around w-28 text-wp-white-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="border-b border-wp-secondary-100">
                  <div className="relative m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-5 h-5 top-2 left-2 text-wp-white-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Aratın veya yeni sohbet başlatın"
                      className="w-full text-wp-white-100 text-xs pl-12 p-2.5 rounded-md outline-none bg-wp-secondary-100"
                    />
                  </div>
                </div>
                {chatCard.map((item, index) => (
                    <div key={index}>
                      <ChatCard data={item} />
                    </div>
                  )
                )}
              </div>
              <div className="col-span-2"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
