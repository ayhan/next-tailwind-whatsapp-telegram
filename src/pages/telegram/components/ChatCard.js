export const ChatCard = (props) => {
  const { data } = props;
  return (
    <div className="grid grid-cols-5 p-2 cursor-pointer hover:bg-telegram-gray-200">
      <div className="col-span-1">
        <img src={data.img} alt={data.name} className="rounded-full w-15" />
      </div>
      <div className="col-span-4">
        <div className="flex justify-between">
          <h2 className="text-white text-sm">{data.name}</h2>
          <p className="text-xs text-telegram-gray-100">{data.date}</p>
        </div>
        <div className="flex justify-between text-right">
          <p className="text-xs text-telegram-gray-100">{data.message}</p>
          <div className="p-1 px-2 h-5 leading-3 text-xs font-bold text-white text-center rounded-full bg-telegram-gray-200">
            <p>
              8
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
