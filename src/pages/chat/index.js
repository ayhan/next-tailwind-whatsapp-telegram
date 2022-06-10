/* This example requires Tailwind CSS v2.0+ */
import Header from "components/Header";

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
          </div>
        </main>
      </div>
    </>
  );
}
